/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'medieval-brown': '#3d2817',
        'medieval-brown-dark': '#1a0f08',
        'parchment': '#f4e4c1',
        'parchment-dark': '#2c2416',
        'gold': '#d4af37',
        'gold-bright': '#ffd700',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'decorative': ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}
