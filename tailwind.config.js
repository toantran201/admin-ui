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
      }
    },
  },
  plugins: [],
})
