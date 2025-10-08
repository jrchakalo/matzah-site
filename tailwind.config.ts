import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#DD0000",
          secondary: "#F77F00",
          accent: "#FCBF49",
          dark: "#000000",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 40px rgba(221, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
