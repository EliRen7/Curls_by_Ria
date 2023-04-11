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
      headers:['Amatic SC', 'cursive'],
      descriptions:['Patrick Hand', 'cursive']
    },
    keyframes: {
      'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      }
  },
  animation: {
      'fade-in-down': 'fade-in-down 2s ease-out'
  }
  },
  plugins: [require("daisyui")],
}


// #FFFFFA