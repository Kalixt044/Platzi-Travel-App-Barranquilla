/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bali': "url('./src/assets/img/bali.jpg')",
        'chicago': "url('./src/assets/img/chicago.jpg')",
        'europe': "url('./src/assets/img/europe.jpg')",
        'iceland': "url('./src/assets/img/iceland.jpg')",
        'lA': "url('./src/assets/img/LA.jpg')",
        'miami': "url('./src/assets/img/miami.jpg')",
        'newYork': "url('./src/assets/img/new_york.jpg')",
        'norway': "url('./src/assets/img/norway.jpg')",
        'sanfrancisco': "url('./src/assets/img/sanFrancisco.jpg')",
        'sanfranciscoDesktop': "url('./src/assets/img/sanFranciscoDesktop.jpg')",
        'seattle': "url('./src/assets/img/seattle.jpg')",
        'switzerland': "url('./src/assets/img/switzerland.jpg')",
        'sydney': "url('./src/assets/img/sydney.jpg')",
        'yosemite': "url('./src/assets/img/yosemite.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': "#cc2d4a",
        'secondary': "#8fa206",
        'terciary': "#61aec9"
      }),
      textColor: {
        'primary': "#cc2d4a",
        'secondary': "#8fa206",
        'terciary': "#61aec9"
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
