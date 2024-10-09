/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        darkGray: "#242424",
        lightBeige: "#f7f4ed",
        mediumGray: "#6b6b6b",
      },
    },
  },
  plugins: [],
};
