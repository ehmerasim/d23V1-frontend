/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '330px',
      // => @media (min-width: 576px) { ... }

      'md': '450px',
      // => @media (min-width: 960px) { ... }

      'lg': '800px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}