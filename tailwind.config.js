/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        'linear-green-one': 'linear-gradient(359.69deg, #064C35 0.26%, #064C35 19.11%, #0B5D39 70.5%, #14793F 105.62%)',
      },
      colors: {
        darkGreen: '#02271B',
        lightGreen: '#278537',
        paleGreen: '#81CC40',
        brightGreen: '#19FB9B',
        offWhite: '#FFFFFE',
        neonGreen: 'linear-gradient(180deg, #25AAE1 0%, rgba(64, 228, 149, 0.15) 33.33%, rgba(48, 221, 138, 0.1) 66.67%, rgba(43, 182, 115, 0) 100%)'
      },
      fontFamily: {
        mainFont: ['Alfa Slab One'],
        textFont: ['Gentium Book Plus']
      } 
    },
  },
  plugins: [],
}

