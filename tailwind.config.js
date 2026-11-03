/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sarabun: ['"TH Sarabun New"', 'Sarabun', 'sans-serif'],
        sans: ['Prompt', 'Sarabun', 'sans-serif'],
      },
      colors: {
        buu: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          gold: '#cba052',
          navy: '#1e293b'
        }
      }
    },
  },
  plugins: [],
}
