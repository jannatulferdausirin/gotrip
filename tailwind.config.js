/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        container: "1440px",
      },
      backgroundImage: {
        'bannerimg': "url('/src/assets/pexels-tomáš-malík-3408354.jpg')",
        
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'], 
      }
    },
  },
  plugins: [require("daisyui")],
}

