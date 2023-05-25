/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': "#cc2d4a",
        'secondary': "#8fa206",
        'terciary': "#61aec9"
      }),
      textColor: {
        'primary': "#AF25D4",
        'secondary': "#8fa206",
        'terciary': "#61aec9"
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
