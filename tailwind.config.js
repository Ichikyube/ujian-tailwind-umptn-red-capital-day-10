/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        myOrange: 'hsl(26, 100%, 55%)',
        myBlue: '#217BF4',
        myLightBlue: '#E2EEFF',
        myGrey: '#656464',
        myPaleOrange: '#E5E5E5',
        myVeryDarkBlue: 'hsl(220, 13%, 13%)',
        myGrayish: '#8C8C8C',
        myDarkGrey: '#4A4A56',
        myGrayishBlue: '#2B2B39',
        mygradGrey: '#D4E7FE',
        myDarkgradGrey: '#2F2C4A',
        mygradWhite: '#FFFFFF',
        myDarkestShade: '#20202D',
        myBlack: '#000000',
        myLightGrayishBlue: 'hsl(223, 64%, 98%)',
        myWhite: 'hsl(0, 0%, 100%)'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'shadecolor': 'gradation 15s ease infinite',
        'gradienShade': 'gradient 15s ease infinite'
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        },
        gradation: {
          '10%':  'gradient-mask-t-90' ,
          '20%':  'gradient-mask-t-80' ,
          '30%':  'gradient-mask-t-70' ,
          '40%':  'gradient-mask-t-60' ,
          '50%':  'gradient-mask-t-50' ,
          '60%':  'gradient-mask-t-40' ,
          '70%':  'gradient-mask-t-30' ,
          '80%':  'gradient-mask-t-20' ,
          '90%':  'gradient-mask-t-10' ,
          '100%':  'gradient-mask-t-0' 
        }
      }
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1170px',
        '2xl': '1170px'
      }
    },
    fontFamily: {
      'hind': ['Hind Vadodara'],
      'playfair': ['Playfair Display', 'serif']
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-box-shadow'),
    require("tailwind-gradient-mask-image"),
    require('tailwind-clip-path')
  ]
}
