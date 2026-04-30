This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Gallery Publishing

Put full-size event photos in a local folder, then publish them to Vercel Blob.
The scripts require `GALLERY_SOURCE_DIR` and `GALLERY_BLOB_PREFIX` so source
photos can stay outside the repository and each upload has an explicit Blob
destination.

```bash
vercel env pull
```

Add local gallery settings to `.env.local`:

```bash
GALLERY_SOURCE_DIR=/path/to/event/photos
GALLERY_BLOB_PREFIX=/2025/gallery
```

Optional quality/size settings:

```bash
GALLERY_SLIDE_MAX_DIMENSION=1800
GALLERY_DOWNLOAD_MAX_DIMENSION=3600
GALLERY_WEBP_QUALITY=82
GALLERY_JPEG_QUALITY=88
```

Then run:

```bash
npm run gallery:optimize
npm run gallery:publish
```

`gallery:optimize` verifies the local sources and writes optimized WebP slides
to `.gallery-build/slides` and high-resolution JPEG downloads to
`.gallery-build/downloads` without uploading. `gallery:publish` uploads those
derived images to Vercel Blob, then rewrites `app/gallery-images.ts` with the
committed URL manifest used by the home page.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
