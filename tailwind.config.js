/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope-Regular'],
        'manrope-light': ['Manrope-Light']
      },
      backgroundColor: {
        'primary': 'var(--backgr-primary)',
        'secondary': 'var(--backgr-secondary)',
        'table-row-striped': 'var(--table-row-striped)',
        'table-row-un-striped': 'var(--table-row-un-striped)',
      },
      textColor: {
        'title-1': 'var(--title-1)'
      }
    },
  },
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
})
