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
			colors: {
				lightprimary: '#cbd5e1',
				lightsecondary: '#e2e8f0',
				darkprimary: '#1e293b',
				darksecondary: '#131C2A'
			}
		},
	},
	plugins: [],
}
