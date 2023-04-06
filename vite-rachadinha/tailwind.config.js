/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#F5F3FE",
      purple: {
        300: "#7C56FE",
        500: "#6846D9",
        700: "#543BAC",
      },
      gray: {
        300: "#D8D6E1",
        500: "#313034",
        800: "#3D3C41",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Pridi", "serif"],
    },
  },
  plugins: [],
};
