/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#C0FDFB',
        'dark-green': '#64B6AC',
        'dark-peach': '#FAD4C0',
        'light-peach': '#FEE9E1',
        brown: '#B09E99',
      },
    },
  },
  plugins: [],
}
