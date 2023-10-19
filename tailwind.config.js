/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        tint2: {
          200: '#fdd4c7',
          300: '#ff8a65',
          400: '#cf6161',
        }
      },
    },
  },
  plugins: [],
  
}
