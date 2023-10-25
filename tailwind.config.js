/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'title': ['Inter', 'sans-serif'],
      'body': ['Lexend Deca', 'sans-serif'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'html': { fontSize: "15px" },
      })
    }),
  ],
};