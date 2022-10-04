module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: {
    'postcss-import': true,
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
}
