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
        'custom-black': '#000000',
        'custom-gradient': '#A28DEC', // Gradient color definition
      },
    },
  },
  plugins: [],
};
