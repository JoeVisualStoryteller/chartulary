/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'knight-black': '#0d0d0d',
        'stone': '#1c1c1c',
        'iron': '#2e2e2e',
        'crimson': '#7b1818',
        'crimson-bright': '#a01e1e',
        'ember': '#c9a227',
        'ash': '#d4c4a0',
        'steel': '#8a9bb0',
        'mist': '#4a5568',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'decorative': ['Cinzel', 'serif'],
        'hero': ['Cinzel Decorative', 'serif'],
      },
    },
  },
  plugins: [],
}
