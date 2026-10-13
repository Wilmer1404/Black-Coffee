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
        cream: "#FDF7E7",
        "coffee-dark": "#3B2211",
        "coffee-cream": "#FDF7E7",
        sand: "#FBEFC4",
        caramel: "#B8651B",
        leaf: "#4F7A3A",
        mint: "#E3EBD0",
        orange: "#FF9333",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(59, 34, 17, 0.25)",
      },
    },
  },
  plugins: [],
}
