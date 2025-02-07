/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        'primary': '#ea1f33',
      },
      fontFamily: {
        'chillax': 'Chillax, sans-serif'
      },
     
    },
  },
  plugins: [],
}