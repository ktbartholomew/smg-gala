import { put } from "@vercel/blob";
import { createReadStream } from "node:fs";
import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

for (const envFile of [".env.local", ".env"]) {
  dotenv.config({
    override: false,
    path: path.join(projectRoot, envFile),
    quiet: true,
  });
}

const optimizedDir = path.join(projectRoot, ".gallery-build", "slides");
const manifestPath = path.join(projectRoot, "app", "gallery-images.ts");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const maxSlideDimension = Number(process.env.GALLERY_MAX_DIMENSION ?? 1800);
const webpQuality = Number(process.env.GALLERY_WEBP_QUALITY ?? 82);
const cacheControlMaxAge = 31536000;
const dryRun = process.argv.includes("--dry-run");

function getContentType(filename) {
  const extension = path.extname(filename).toLowerCase();

  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";
  if (extension === ".png") return "image/png";
  if (extension === ".webp") return "image/webp";

  return "application/octet-stream";
}

function getAltText(filename) {
  const name = filename.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
  return `Saint Maria Goretti Gala photo ${name}`;
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: projectRoot,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stderr = "";

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(
          `${command} exited with code ${code}${stderr ? `:\n${stderr}` : ""}`,
        ),
      );
    });
  });
}

function getJpegDimensions(buffer) {
  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    const isStartOfFrame =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);

    if (isStartOfFrame) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += 2 + length;
  }

  throw new Error("Could not read JPEG dimensions");
}

function getPngDimensions(buffer) {
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function readUInt24LE(buffer, offset) {
  return buffer[offset] + (buffer[offset + 1] << 8) + (buffer[offset + 2] << 16);
}

function getWebpDimensions(buffer) {
  const format = buffer.toString("ascii", 12, 16);

  if (format === "VP8X") {
    return {
      width: readUInt24LE(buffer, 24) + 1,
      height: readUInt24LE(buffer, 27) + 1,
    };
  }

  if (format === "VP8L") {
    const bits = buffer.readUInt32LE(21);

    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }

  if (format === "VP8 ") {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }

  throw new Error("Could not read WebP dimensions");
}

async function getImageDimensions(filePath) {
  const buffer = await readFile(filePath);
  const extension = path.extname(filePath).toLowerCase();

  if (extension === ".jpg" || extension === ".jpeg") {
    return getJpegDimensions(buffer);
  }

  if (extension === ".png") {
    return getPngDimensions(buffer);
  }

  if (extension === ".webp") {
    return getWebpDimensions(buffer);
  }

  throw new Error(`Unsupported image type: ${filePath}`);
}

function getSlideDimensions({ width, height }) {
  const scale = Math.min(1, maxSlideDimension / Math.max(width, height));

  return {
    width: Math.round(width * scale),
    height: Math.round(height * scale),
  };
}

async function uploadFile({ localPath, pathname, contentType }) {
  return put(pathname, createReadStream(localPath), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge,
    contentType,
    multipart: true,
  });
}

function buildManifest(entries) {
  return `export type GalleryImage = {
  id: string;
  alt: string;
  originalSrc: string;
  originalDownloadSrc: string;
  originalWidth: number;
  originalHeight: number;
  slideSrc: string;
  slideWidth: number;
  slideHeight: number;
};

export const galleryImages = [
${entries
  .map(
    (entry) => `  {
    id: ${JSON.stringify(entry.id)},
    alt: ${JSON.stringify(entry.alt)},
    originalSrc: ${JSON.stringify(entry.originalSrc)},
    originalDownloadSrc: ${JSON.stringify(entry.originalDownloadSrc)},
    originalWidth: ${entry.originalWidth},
    originalHeight: ${entry.originalHeight},
    slideSrc: ${JSON.stringify(entry.slideSrc)},
    slideWidth: ${entry.slideWidth},
    slideHeight: ${entry.slideHeight},
  },`,
  )
  .join("\n")}
] satisfies GalleryImage[];
`;
}

if (!dryRun && !process.env.BLOB_READ_WRITE_TOKEN) {
  throw new Error(
    "BLOB_READ_WRITE_TOKEN is not set. Run `vercel env pull` or export the token before publishing the gallery.",
  );
}

if (!process.env.GALLERY_SOURCE_DIR) {
  throw new Error(
    "GALLERY_SOURCE_DIR is required. Set it to the local folder containing the full-size gallery images.",
  );
}

if (!process.env.GALLERY_BLOB_PREFIX) {
  throw new Error(
    "GALLERY_BLOB_PREFIX is required. Set it to the destination folder in Vercel Blob, for example `/2025/gallery`.",
  );
}

const sourceDir = path.resolve(projectRoot, process.env.GALLERY_SOURCE_DIR);
const blobPrefix = process.env.GALLERY_BLOB_PREFIX.replace(/^\/+|\/+$/g, "");

if (!blobPrefix) {
  throw new Error("GALLERY_BLOB_PREFIX must contain at least one path segment.");
}

try {
  await access(sourceDir);
} catch {
  throw new Error(`GALLERY_SOURCE_DIR does not exist: ${sourceDir}`);
}

const imageFiles = (await readdir(sourceDir))
  .filter((filename) =>
    supportedExtensions.has(path.extname(filename).toLowerCase()),
  )
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

if (imageFiles.length === 0) {
  throw new Error(`No gallery images found in ${sourceDir}`);
}

await mkdir(optimizedDir, { recursive: true });

const manifestEntries = [];

for (const [index, filename] of imageFiles.entries()) {
  const sourcePath = path.join(sourceDir, filename);
  const basename = filename.replace(/\.[^.]+$/, "");
  const slideFilename = `${basename}.webp`;
  const optimizedPath = path.join(optimizedDir, slideFilename);
  const originalDimensions = await getImageDimensions(sourcePath);
  const slideDimensions = getSlideDimensions(originalDimensions);

  console.log(
    `[${index + 1}/${imageFiles.length}] Optimizing ${filename} -> ${slideFilename}`,
  );

  await runCommand("cwebp", [
    "-quiet",
    "-q",
    String(webpQuality),
    "-resize",
    String(slideDimensions.width),
    String(slideDimensions.height),
    sourcePath,
    "-o",
    optimizedPath,
  ]);

  if (dryRun) {
    manifestEntries.push({
      alt: getAltText(filename),
      id: filename,
      originalDownloadSrc: "",
      originalHeight: originalDimensions.height,
      originalSrc: "",
      originalWidth: originalDimensions.width,
      slideHeight: slideDimensions.height,
      slideSrc: "",
      slideWidth: slideDimensions.width,
    });
    continue;
  }

  const originalPathname = `${blobPrefix}/originals/${filename}`;
  const slidePathname = `${blobPrefix}/slides/${slideFilename}`;

  console.log(`[${index + 1}/${imageFiles.length}] Uploading ${filename}`);
  const [originalBlob, slideBlob] = await Promise.all([
    uploadFile({
      contentType: getContentType(filename),
      localPath: sourcePath,
      pathname: originalPathname,
    }),
    uploadFile({
      contentType: "image/webp",
      localPath: optimizedPath,
      pathname: slidePathname,
    }),
  ]);

  manifestEntries.push({
    alt: getAltText(filename),
    id: filename,
    originalDownloadSrc: originalBlob.downloadUrl,
    originalHeight: originalDimensions.height,
    originalSrc: originalBlob.url,
    originalWidth: originalDimensions.width,
    slideHeight: slideDimensions.height,
    slideSrc: slideBlob.url,
    slideWidth: slideDimensions.width,
  });
}

if (dryRun) {
  console.log(
    `Optimized ${manifestEntries.length} gallery images into ${path.relative(
      projectRoot,
      optimizedDir,
    )}. Re-run without --dry-run to upload and update the manifest.`,
  );
} else {
  await writeFile(manifestPath, buildManifest(manifestEntries));

  console.log(
    `Published ${manifestEntries.length} gallery images to Vercel Blob and updated ${path.relative(
      projectRoot,
      manifestPath,
    )}`,
  );
}
