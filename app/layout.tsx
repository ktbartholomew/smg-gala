import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import content from "@/app/content";
import bgImage from "./adobe-sparkle-cosmos.jpg";
import Glimmer from "@/components/glimmer";

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
        <Glimmer />
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
            style={{ filter: "brightness(0.5) saturate(1)" }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
