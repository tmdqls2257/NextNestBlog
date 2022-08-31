/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#9DE7D7",
        blue: "#74D1EA",
        violet: "#BF9BDE",
        magenta: "#F1B2DC",
        "light-grey": "#C1C6C8",
        grey: "#A2AAAD",
        black: "#101820",
        red: "#EF3340",
        white: "#fff",
        pink: "#f0506e",
      },
    },
  },
  plugins: [],
};
