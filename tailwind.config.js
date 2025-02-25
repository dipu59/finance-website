/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        primary: "#772ab3",
        secondary: "#adb2b1",
        foreground: "#ffffff",
      },
      fontFamily: { mplus1: '"M PLUS 1", sans-serif' },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

