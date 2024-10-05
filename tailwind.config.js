/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
        euclid: ['Euclid Circular A', 'sans-serif'],
      },
      colors: {
        customGreen: '#6F6A42', // Olive Green
        customBeige: '#EFE8C2', // Light Beige
        customDarkGreen: '#224F34', // Dark Green
        customBlue: '#00398F', // Dark Blue
        customDarkGray: '#272727', // Dark Gray
      },
    },
  },
  plugins: [],
}

