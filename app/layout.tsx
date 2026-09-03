import type { Metadata } from "next";
import "./globals.css";
import content from "@/app/content";
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
      <body className="antialiased">
        {children}
        <footer className="border-t border-[var(--line)] px-6 py-8 text-center text-sm text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()}{" "}
          <Link className="underline underline-offset-4" href={content.schoolWebsiteUrl} target="_blank">
            Saint Maria Goretti Catholic School
          </Link>
        </footer>
        <script
          defer
          data-domain="gala.smgschool.org"
          src="/js/script.js"
        ></script>
      </body>
    </html>
  );
}
