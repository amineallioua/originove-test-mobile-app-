// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'], 
      },
      boxShadow: {
        'custom': '0px 0px 43.2px 6px rgba(0, 80, 115, 0.2)', // Custom shadow
        'custom2': '0px 0px 28.4px 5px rgba(0, 80, 115, 0.2)', // Custom shadow
      },
    },
  },
  plugins: [],
};
