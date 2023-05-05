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
      },
    },
    fontFamily:{
      headers:['Contrail One', 'cursive'],
      descriptions:['Patrick Hand', 'cursive'],
      about: ['Pacifico', 'cursive'],
      korean: ['Single Day', 'cursive']
    },
  },
  plugins: [
    require("daisyui")],
}


// #FFFFFA