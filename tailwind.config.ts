import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        romantic: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#b58d80",
          600: "#9c6d5e",
          700: "#835345",
          800: "#6d4439",
          900: "#5b3a32",
        },
        champagne: {
          50: "#faf8f5",
          100: "#f5f0e8",
          200: "#ebe0ce",
          300: "#decbb1",
          400: "#ccb089",
          500: "#ba9567",
          600: "#a67f53",
          700: "#866342",
          800: "#6e5239",
          900: "#5a4331",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        script: ["Great Vibes", "Alex Brush", "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

