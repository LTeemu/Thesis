module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				textColor: 'colorAnim 0.8s infinite',
			},
			backgroundImage: {
				hero: "url('../public/static/images/pattern-2665078_1920.jpg')",
			},
		},
	},
	plugins: [],
}
