/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B2211",
        cream: "#FAF6E9",
        "coffee-dark": "#3B2211",
        "coffee-cream": "#FAF6E9",
      },
    },
  },
  plugins: [],
}
