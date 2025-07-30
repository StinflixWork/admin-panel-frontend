const { heroui } = require('@heroui/theme')

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx,scss}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		fontFamily: {
			inter: 'Inter, sans-serif',
			Poppins: 'Poppins, sans-serif'
		},
		extend: {
			colors: {
				primary: '#2891f2',
				gray: {
					basic: '#8e8e93',
					state: '#d3e5f5',
					light: '#f2f2f7',
					dark: '#1c1c1e',
					secondary: '#eeeeee'
				},
				red: {
					basic: '#ef1111'
				},
				green: {
					brand: '#058A8A'
				}
			},
			boxShadow: {
				'blue-light': '0 10px 60px 0 rgba(226,236,249,0.5)'
			},
			width: {
				sidebar: '306px'
			}
		}
	},
	plugins: [heroui()]
}
