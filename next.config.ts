import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => [
    {
      source: "/js/script.js",
      destination: "https://plausible.io/js/script.hash.outbound-links.js",
    },
    {
      source: "/api/event",
      destination: "https://plausible.io/api/event",
    },
  ],
};

export default nextConfig;
