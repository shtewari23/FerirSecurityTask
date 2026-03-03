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
        primary: '#0CC8A8',
        'primary-hover': '#0AB599',
        critical: '#EF4444',
        high: '#F97316',
        medium: '#EAB308',
        low: '#22C55E',
        dark: {
          bg: '#0F0F0F',
          surface: '#1A1A1A',
          border: '#2A2A2A',
          text: '#E5E5E5',
          'text-secondary': '#A3A3A3',
        },
        light: {
          bg: '#FFFFFF',
          surface: '#F5F5F5',
          border: '#E5E5E5',
          text: '#171717',
          'text-secondary': '#737373',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
