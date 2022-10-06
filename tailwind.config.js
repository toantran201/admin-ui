/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'body': 'var(--bg-body)',
        'nav-header': 'var(--bg-nav-header)',

        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'success': 'var(--success)',
        'info': 'var(--info)',
        'warning': 'var(--warning)',
        'danger': 'var(--danger)',

        'soft-primary': 'var(--soft-primary)',
        'soft-secondary': 'var(--soft-secondary)',
        'soft-success': 'var(--soft-success)',
        'soft-info': 'var(--soft-info)',
        'soft-warning': 'var(--soft-warning)',
        'soft-danger': 'var(--soft-danger)',

        'pagination-hover-bg': 'var(--pagination-hover-bg)',

        'table-row-striped': 'var(--table-row-striped)',
        'table-row-un-striped': 'var(--table-row-un-striped)',
      },
      textColor: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'success': 'var(--success)',
        'info': 'var(--info)',
        'warning': 'var(--warning)',
        'danger': 'var(--danger)',
      },
      borderColor: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'success': 'var(--success)',
        'info': 'var(--info)',
        'warning': 'var(--warning)',
        'danger': 'var(--danger)',
      },
      ringColor: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'success': 'var(--success)',
        'info': 'var(--info)',
        'warning': 'var(--warning)',
        'danger': 'var(--danger)',
      }
    },
  },
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
}
