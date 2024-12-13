import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          500: "#F7A878",
          400: "#ffd2b6",
        },
      },
    },
    container: {
      center: true,
      padding: "8vw",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
