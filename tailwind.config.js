/* eslint-disable quotes */
module.exports = {
	content: [
		"./pages/**/*.{tsx, ts, js, jsx}",
		"./components/**/*.{tsx, ts, js, jsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Source Sans Pro"', "sans-serif"],
			},
			fontSize: {
				base: ["1.25rem", "30px"],
			},
			colors: {
				'blue': '#004ebe',
			},
			maxWidth: {
				'3/4': '75%',
			},
			minWidth: {
				'3/4': '75%',
			},
		},
	},
};
