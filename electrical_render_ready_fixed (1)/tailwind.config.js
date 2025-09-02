import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          dark: "#0284c7"
        }
      },
      boxShadow: {
        soft: "0 10px 35px rgba(2,132,199,0.12)"
      }
    },
  },
  plugins: [],
};
module.exports = config;
