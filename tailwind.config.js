/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        theme: {
          dark: "#fafafa",
          lgith:"#1d1d1d"
        },
        black: {
          bg: "#1c1c1e",
          default: "#000000",
        },
        gray: {
          light: "#f5f5f5",
          default: "#ebebeb",
          dark: "#2c2c2e",
        },
      },
    },
  },
  plugins: [],
};
