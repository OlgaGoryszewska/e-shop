/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
  
    extend: {
      colors: {
        'primary': '#D8D7D7',
        'black': '#252323',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },


    },
  },
  plugins: [],
}
