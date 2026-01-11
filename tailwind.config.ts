import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        platinum: "var(--platinum)",
        foreground: "var(--foreground)",
        "champagne-light": "var(--champagne-light)",
        "champagne-dark": "var(--champagne-dark)",
        "champagne-darker": "var(--champagne-darker)",
      },
    },
  },
  plugins: [],
} satisfies Config;
