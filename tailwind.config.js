/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "375px",
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      gridTemplateRows: {
        homeMobile: "325px repeat(3, minmax(100px ,1fr))",
        homeTablet: "repeat(3, 285px)",
        homeDesktop: "250px 361px",
      },
      backgroundImage: {
        gradient: "linear-gradient(45deg, #e36577, #f6edb2);",
      },
      colors: {
        theme: {
          dark: "#fafafa",
          lgith: "#1d1d1d",
        },
        darkBg: "#1d1d1d",
        gray: {
          light: "#f5f5f5",
          DEFAULT: "#ebebeb",
          dark: "#2c2c2e",
        },
      },
      fontFamily: {
        primary: "system-ui, sans-serif",
      },
    },
  },
  plugins: [],
};
