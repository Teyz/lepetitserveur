/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C52543',
          dark: '#0B0C10',
        },
        secondary: {
          dark: '#232427',
          middark: '#222222',
          DEFAULT: '#272828',
          light: '#393939',
          midlight: '#BABABA',
          lighter: '#8D8D8D',
          lightest: '#DEDEE3',
        },
      },
      fontFamily: {
        nocturne: ['nocturne-serif'],
      },
    },
  },
  plugins: [],
}

