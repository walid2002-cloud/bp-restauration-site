/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#101620',
        paper: '#f3eee6',
        copper: '#c65332',
        amber: '#e39a45',
      },
    },
  },
  plugins: [],
};
