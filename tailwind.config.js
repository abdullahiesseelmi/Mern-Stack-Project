/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green": "#39DBA4",
        "red": "#FF6868",
        "secondary": "#555",
        "primaryBG": "#FCFCFC"
      },

      // fontFamily:{
      //   "primary": ['Inter', 'sans-serif']
      // }
    },
  },
  plugins: [require("daisyui")],
}

