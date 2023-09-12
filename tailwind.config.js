/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        grey: '#abb7c4',
        blue: '#4280bf',
        red: '#dd003f',
        'dark-blue': '#233a50',
        card: '#091a2c',
        yellow: '#dcf836',
        'dark-grey': '#222',
        'light-grey': '#e1e1e1'
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

