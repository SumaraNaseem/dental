/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        afacad: ['Afacad', 'sans-serif'],
        sans: ['Afacad', 'sans-serif'], // Set Afacad as default sans-serif to match Figma
      },
    },
  },
  plugins: [],
}