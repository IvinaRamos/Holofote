/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Noto Serif', 'serif'],
        'sans': ['Noto Serif', 'serif'],
      },
    },
  },
  plugins: [],
} 