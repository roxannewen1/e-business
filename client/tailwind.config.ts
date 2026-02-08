import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

const themes = {
  light: {
    primary: "#2563eb", // blue-600
    secondary: "#f59e42", // orange-400
    brand: "#F3F3F3",
    background: "#ffffff",
    text: "#111827", // gray-900
  },
  dark: {
    primary: "#60a5fa", // blue-400
    secondary: "#fbbf24", // yellow-400
    brand: "#4A4A4A",
    background: "#18181b",
    text: "#f3f4f6", // gray-100
  },
};

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)],
};

export default config;
