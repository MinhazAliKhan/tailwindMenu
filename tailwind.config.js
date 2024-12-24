/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0984e3",
        secondary: "#6c5ce7",
      },
      fontFamily: {
        display: ["urbanist", "sans-serif"],
        body: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
