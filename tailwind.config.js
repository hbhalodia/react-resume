module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				heading: '#00263E',
			},
			fontFamily: {
				Tungsten: [ 'Tungsten', 'sans-serif'],
				'HelveticaNeueLTPro-Roman': [ 'HelveticaNeueLTPro-Roman', 'sans-serif'],
				'HelveticaNeueLTPro-BdCn': [ 'HelveticaNeueLTPro-BdCn', 'sans-serif' ],
			},
			fontSize: {
				'Tungsten-heading-font': '30px',
				'description-font': '20px',
				'Tungston-Bio-font': '20px',
			},
			screens: {
				'mobile': { 'max': '767px' },
				'tablet': { 'max': '1157px' },
			},
		},
	},
	plugins: [],
}