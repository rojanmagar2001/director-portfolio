import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1700px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fullSpin: {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        fullSpin: "fullSpin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
