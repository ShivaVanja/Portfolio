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
        jersey: ['Jersey 10', 'sans-serif'],
        bungee: [ "Bungee Tint", 'sans-serif'],
      },
      colors: {
        primary: '#eb263d',  // You can name it anything you want, like "primary"
      },
    },
  },
  plugins: [],
}
