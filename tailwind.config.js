/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/webapp/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Золотой цвет для акцентов
      },
    },
  },
  plugins: [],
}