/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#009485',
        'primary-green-dark': '#0a4d46',
        bg: '#2E303E',
        secondary: '#FFAA00',
        'dark-night': '#23272F',
        'dark-plus': '#15181c',
        'link-pink': '#FD3A73',
        danger: '#F87171'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out'
      }
    }
  },
  plugins: []
}
