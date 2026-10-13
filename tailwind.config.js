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
        sand: "#F4E8C3",
        caramel: "#C8742B",
        leaf: "#4F7A3A",
        mint: "#E3EBD0",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(59, 34, 17, 0.25)",
      },
    },
  },
  plugins: [],
}
