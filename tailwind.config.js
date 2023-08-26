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
			},
			borderWidth: {
				small: '1px',
			},
			backgroundImage: {
				slider: "url('./src/i/slider-bg.jpg')",
			},
		},
	},
	plugins: [],
}
