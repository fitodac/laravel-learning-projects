import defaultTheme from 'tailwindcss/defaultTheme'
const { amber } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.jsx',
	],
	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				sans: ['Figtree', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				...amber,
			},
		},
	},

	plugins: [],
}
