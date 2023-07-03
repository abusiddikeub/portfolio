/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        titleFont:["Montserrat","sans-serif"]
      },
      colors:{
        bodyColor:"#212428",
        lightText:"#c4cfde"
      },
      boxShadow:{
        shadowOne:"10px 10px 19px #1cle22v-10px 19px #262a2e"
      },
    },
  },
  plugins: [require("daisyui")]
}

