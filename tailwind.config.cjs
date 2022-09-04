/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light': '#F3F8FB',
        'greenc': {
          100: '#BEDCDF',
          200: '#26C2AD',
          300: '#00474B',
        },
      },
    },
  },
  plugins: [],
};
