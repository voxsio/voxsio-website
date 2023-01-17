/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*{js,ts,jsx,tsx}"
	],
	theme: {
		colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,

            gray: {
                100: '#F7F7F7',
                300: '#E5E5E5',
                500: '#AFAFAF',
                700: '#777777',
                900: '#4B4B4B'
            },
            light: {
                300: '#FFF9ED',
                500: '#FCEFDF',
                700: '#FBE4D4',
            },
            dark: {
                500: '#4E1818',
                700: '#622F33'
            },
            
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
                500: '#E15A54',
                700: '#B84138',
                900: '#A9343A'
            },

			cream: '#F9F1E6',
			sun: '#F5C72C',
			orange: '#F59D18',
			grass: '#7CAC25',
			teal: '#0D675B',
			choco: '#A1683D',
			sky: '#A2CBFF',
			aqua: '#3AB3BB',
			ocean: '#2167BC',
			pink: '#FF8A9D',
			ketchup: '#C5533B',

            apricot: {
                300: '#F8D5AC',
                500: '#FDC78B',
                700: '#E49668'
            },
            navy: {
                300: "#7E99BB",
                500: "#4F5673",
                700: "#33333F"
            },
            olive: {
                100: '#DFC481',
                300: '#D5B77B',
                500: '#C9AF64',
                700: '#BD9A5A',
                900: '#B38A52'
            },
            night: {
                300: '#A5A7D0',
                500: '#7375A5'
            },
            shade: {
                300: "#D8E0FA",
                500: "#7384B8"
            },
            brown: {
                500: '#B57E5B',
                700: '#A26B4D'
            },
            salmon: {
                500: '#FFE1C9',
                700: '#E4B094'
            },
            rose: {
                500: '#EDCBC9'
            },
            mint: {
                500: '#A4EECD'
            }
		},
		extend: {
			fontFamily: {
				'sans': ['Nunito', ...defaultTheme.fontFamily.sans],
				'hand': ['Juvia', ...defaultTheme.fontFamily.serif],
				'mono': ['DM Mono', ...defaultTheme.fontFamily.mono]
			}
		},
	},
	plugins: [],
}
