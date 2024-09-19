/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/images/background.webp')", // Your image path
      },
    },
  },
  plugins: [],
};
