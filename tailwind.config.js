/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        afacad: ['Afacad', 'sans-serif'],
        sans: ['Inter', 'sans-serif'], // Set Inter as default sans-serif (matches image font)
      },
    },
  },
  plugins: [],
}