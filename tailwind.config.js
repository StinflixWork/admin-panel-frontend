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
			inter: 'Inter, sans-serif'
		},
		extend: {
			colors: {
				primary: '#2891f2',
				gray: {
					basic: '#8e8e93',
					state: '#d3e5f5',
					light: '#f2f2f7',
					dark: '#1c1c1e'
				},
				red: {
					basic: '#ef1111'
				}
			},
			width: {
				sidebar: '280px'
			}
		}
	},
	plugins: [heroui()]
}
