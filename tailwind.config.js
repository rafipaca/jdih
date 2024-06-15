/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#004E43',
        secondary: '#9AD0C2',
        ternary:'#006859'
      }
    }
  },
  plugins: [require('daisyui')]
}
