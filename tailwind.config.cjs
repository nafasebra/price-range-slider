/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light': '#F1F5FE',
        'dark': '#293356',
        'turquoise': {
          100: '#A3F1E9',
          200: '#10D7C4',
        },
      },
    },
  },
  plugins: [],
};
