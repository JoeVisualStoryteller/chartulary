/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medieval-brown': '#3d2817',
        'parchment': '#f4e4c1',
        'gold': '#d4af37',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'decorative': ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}
