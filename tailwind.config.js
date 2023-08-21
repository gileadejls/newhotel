/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    screens: {
      'sm': '460px',
      'md': '800px',
      'lg': '1024px'
    },
    extend: {
      blur: {
        sm: '2px'
      },
    },
  },
  plugins: [],
}

