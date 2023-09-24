/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-pattern': "url('./src/img/forest.webp')",
      },
    },
  },
  plugins: [],
}

