import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import content from "@/app/content";
import bgImage from "./adobe-sparkle-cosmos-shift.webp";
import Glimmer from "@/components/glimmer";
import Link from "next/link";

export const metadata: Metadata = {
  title: content.siteTitle,
  description: content.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="bg-black block w-[100vw] h-[100vh] top-0 left-0 fixed -z-50">
          <Image
            alt="Sparks at night"
            className="object-cover"
            fill
            loading="eager"
            placeholder="blur"
            quality={100}
            sizes="100vw"
            src={bgImage}
            style={{ filter: "brightness(0.5)" }}
          />
          <Glimmer />
        </div>
        {children}
        <div className="text-center text-sm text-gray-300 my-8">
          &copy; {new Date().getFullYear()}{" "}
          <Link href={content.schoolWebsiteUrl} target="_blank">
            Saint Maria Goretti Catholic School
          </Link>
        </div>
        <script
          defer
          data-domain="gala.smgschool.org"
          src="/js/script.js"
        ></script>
      </body>
    </html>
  );
}
