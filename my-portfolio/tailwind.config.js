module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['fade-in-section', 'visible'], // Ensure these classes are not purged
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 'custom-black': '#000000', // You can remove this if not needed
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #A28DEC, #6C63FF)', // Gradient definition
      },
    },
  },
  plugins: [],
};
