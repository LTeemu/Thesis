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
				loadingBG: 'loadingBG 1s ease-in-out infinite'
			},
			backgroundImage: {
				hero: "url('../public/static/images/pattern-2665078_1920.jpg')",
			},
			colors: {
				lightprimary: '#cbd5e1',
				lightsecondary: '#e2e8f0',
				darkprimary: '#1e293b',
				darksecondary: '#131C2A'
			},
			screens: {
				'7xl': '80rem',
			},
			keyframes: {
				loadingBG: {
					'0%, 100%': { filter: 'invert(0)' },
					'50%': { filter: 'invert(0.06)' }
				}
			},
		},
	},
	plugins: [],
}
