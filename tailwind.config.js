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
      'macaroni': '#FDBA74'
    }
  },
  plugins: [],
}

