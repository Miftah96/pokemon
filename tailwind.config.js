/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
    colors: {
      'main' : '#8c4533',
      'champagne': '#fed7aa',
      'macaroni': '#FDBA74',
      'red' : {
        50: '#fef2f2',
        400: '#f87171',
        700: '#b91c1c'
      },
      'green' : {
        50: '#f0fdf4',
        400: '#4ade80',
        700:'#15803d'
      }
    }
  },
  plugins: [],
}

