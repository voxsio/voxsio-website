/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*{js,ts,jsx,tsx}"
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: "#EDCBC9",

			gray: {
				100: '#F7F7F7',
				300: '#E5E5E5',
				500: '#AFAFAF',
				700: '#777777',
				900: '#4B4B4B'
			},
			light: {
				300: '#FFF9ED',
				301: '#FFF9ED00',
				302: '#FFF9EDAA',
				500: '#FCEFDF',
				700: '#FBE4D4',
			},
			dark: {
				300: '#4E1818',
				500: '#622F33'
			},

			// Primary
			yellow: {
				100: '#FEF1D5',
				300: '#FADA9D',
				500: '#FBCC70',
				700: '#EDAE50'
			},
			blue: {
				300: '#BACFCA',
				500: '#6DA0A4',
				700: '#56858B'
			},
			red: {
				300: '#EDA08F',
				500: '#DE5F50',
				700: '#CA4638',
				900: '#A9343A'
			},

			// Secondary
			apricot: {
				300: '#F8D5AC',
				500: '#FDC78B',
				700: '#EA9564'
			},
			olive: {
				300: '#C9AF64',
				500: '#BD9A5A',
				700: '#B38A52'
			},
			orange: {
				500: "#EF7149",
				700: "#C7614C"
			},
			night: {
				500: '#A5A7D0',
				700: '#7375A5'
			},
			brown: {
				500: '#B57E5B',
				700: '#A26B4D'
			},

			// Illustration
			cream: "#F9F1E6",
			blackish: "#25201C",
			choco: {
				300: "#D8C4A8",
				500: "#A1683D"
			},
			sun: {
				300: "#F7EA92",
				500: "#F5C72C"
			},
			mandarine: {
				500: "#F59D18"
			},
			grass: {
				300: "#C5E79A",
				500: "#7CAC25"
			},
			jungle: {
				300: "#A1D1A8"
			},
			moss: {
				300: "#A3BEA2",
				500: "#0D675B"
			},
			duck: {
				300: "#97C4C7"
			},
			aqua: {
				300: "#9BD8DC",
				500: "#3AB3BB"
			},
			sky: {
				300: "#A2CBFF",
				500: "#4A91B9"
			},
			ocean: {
				500: "#2167BC"
			},
			periwinkle: {
				300: "#C8CFE5",
				500: "#8487B5"
			},
			lavender: {
				500: "#D392DC"
			},
			pink: {
				500: "#FF8A9D"
			},
			ketchup: {
				500: "#C5533B"
			},
			gestalt: {
				500: "#534D37"
			}
		},
		extend: {
			fontFamily: {
				"sans": ["Cera Round", ...defaultTheme.fontFamily.sans],
				"hand": ["Juvia", ...defaultTheme.fontFamily.serif]
			},
			keyframes: {
				"marquee": {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" }
				}
			},
			animation: {
				"marquee": "marquee 40s linear infinite"
			}
		},
	},
	plugins: [],
}
