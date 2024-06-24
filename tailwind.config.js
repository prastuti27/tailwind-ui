/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

    theme: {
      extend: {
      colors: {
      
        purple: {
          default: "#37447E",
          dark: "#111b47",
          light: "#505F98",
        },
        
        footer:"#E7ECFF",
        grey:"#CDD1D4"

      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      },
    },

    

  plugins: [],
}
