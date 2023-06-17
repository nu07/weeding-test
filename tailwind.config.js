/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beit-orange': '#F66B0E',
        'beit-blue': '#205375',
        'beit-grey': '#939393',
        'beit-bg': '#EFEFEF',
        'beit-orange-light' : '#EC7B14',
        "beit-grey": "#939393",
        "beit-grey-light": "#E5E5E5",
        "beit-gray-100": "#8B8B8B",
        "blue-beit-dark": "#005E99",
        "beit-text-dark": "#112B3C",
        'blue-gray': colors.blueGray,
      },
      boxShadow: {
        // 'beit-orange': '10px 10px 5px 0px rgba(0,0,0,0.75)',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),

  ],
};
