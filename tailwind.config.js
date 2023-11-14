/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ADF0D4',
        secondary: '#1FD8A4',
        hover: '#114837',
        ring: '#246854',
        button: '#29A383',
        danger: '#e3342f',
        card: '#0F2E22',
        background: '#0D1512',
        darktitle: '#1d1d1d',
      },
      borderColor: {
        primary: '#ADF0D4',
        secondary: '#1FD8A4',
        danger: '#e3342f',
      },
      fontSize: {
        sm: '0.600rem',
        base: '0.8rem',
        xl: '1.066rem',
        '2xl': '1.421rem',
        '3xl': '1.894rem',
        '4xl': '2.525rem',
        '5xl': '3.366rem',
      },
      fontFamily: {
        heading: ['Fragment Mono', 'sans-serif'],
        body: ['Fragment Mono', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}
