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
				yellow: '##dcf836',
			},
			borderWidth: {
				small: '1px',
			},

			backgroundImage: {
				slider: "url('./src/i/slider-bg.jpg')",
			},
			screens: {
				sm: '600px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				'2xl': '1200px',
			},
			gridTemplateColumns: {
				trailer: '1fr 280px',
			},
			maxWidth: {
				992: '650px',
				'2xs': '250px',
				'3xs': '170px',
			},
		},
	},
	plugins: [],
}
