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
        'tan': '#FFFFFA',
        'tan2' : ' #e3dac9',
      },
    },
    fontFamily:{
      headers:['Amatic SC', 'cursive'],
      descriptions:['Patrick Hand', 'cursive']
    },
  },
  plugins: [require("daisyui")],
}
