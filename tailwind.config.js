/** @type {import('tailwindcss').Config} */
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
        'tan': '#FAF9F6',
        'tan2' : ' #e3dac9',
        'korean-description' : '#E73F90',
        'logo-background': '#FFDDF7',
        'navbar-background': '#FF87C1'
      },
    },
    fontFamily:{
      header:['Nanum Myeongjo', 'cursive'],
      about: ['Pacifico', 'cursive'],
      koreanHeader: ['Single Day', 'cursive'],
      Korean: ['Nanum Gothic', 'sans-serif'],

    },
  },
  plugins: [
    require("daisyui")],
}


// #FFFFFA
