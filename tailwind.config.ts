import type { Config } from "tailwindcss";

const config: Config = {
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
      width: {
        picture: "30rem",
      },
      height: {
        workItem: "20rem",
        h600: "37.5rem",
      },
      colors: {
        dark_gray: "#565656",
      },
      maxWidth: {
        maxw46: "46rem",
      },
    },
  },
  plugins: [],
};
export default config;
