const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: '375px',
			...defaultTheme.screens
		},
		extend: {
			colors: {
				cyan: 'hsl(180, 66%, 49%)',
				darkViolet: 'hsl(257, 27%, 26%)',
				red: 'hsl(0, 87%, 67%)',
				gray: 'hsl(0, 0%, 75%)',
				grayishViolet: 'hsl(257, 7%, 63%)',
				veryDarkBlue: 'hsl(255, 11%, 22%)',
				veryDarkViolet: 'hsl(260, 8%, 14%)'
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};
