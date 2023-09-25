/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  prefix: 'tw-',
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
    colors: {
      primary: '#4F46E5',
      secondary: process.env.SECONDARY_COLOR,
      tertiary: process.env.TERTIARY_COLOR,
      faded: process.env.FADED_COLOR,
      'icon-gray': '#828282',
      light: '#828282',
      gray1: '#333333',
      gray2: '#4F4F4F',
      gray3: '#525660',
      gray4: '#BDBDBD',
      gray6:'#F2F2F2',
      gray7:'#F6F7F8',
      danger: '#B60808',
      ...colors,
    },
  },
  plugins: [],
}

