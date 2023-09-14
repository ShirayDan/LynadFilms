/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: 'var(--color-white)',
        grey: 'var(--color-grey)',
        black: 'var(--color-black)',
        blue: 'var(--color-blue)',
        red: 'var(--color-red)',
        'dark-blue': 'var(--color-dark-blue)',
        card: 'var(--color-card)',
        yellow: 'var(--color-yellow)',
        'dark-grey': 'var(--color-dark-grey)',
        'light-grey': 'var(--color-light-grey)',
        'news-card': 'var(--color-news-card)',
        'header-border': 'var(--color-header-border)',
        'main-bg': 'var(--color-main-bg)',
        'selects-bg': 'var(--color-selects-bg)',
        'filters-border': 'var(--color-filters-border)',
        'filters-bg': 'var(--color-filters-bg)',
        'main-trailer': 'var(--color-main-trailer)'
      },
      borderWidth: {
        small: '1px'
      },
      backgroundImage: {
        slider: "url('./src/i/slider-bg.jpg')"
      },
      screens: {
        sm: '600px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1200px'
      },
      gridTemplateColumns: {
        trailer: '1fr 280px',
        tabs: ' 1fr 140px'
      },
      maxWidth: {
        992: '650px',
        '2xs': '250px',
        '3xs': '165px',
        'slider-lg': '520px',
        'slider-xl': '726px',
        'slider-2xl': '836px',
        'slider-3xl': '866px'
      },
      width: {
        200: '200px',
        300: '300px',
        430: '430px'
      },
      height: {
        112: '26rem'
      }
    }
  },
  plugins: []
}

