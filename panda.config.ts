import {defineConfig} from '@pandacss/dev';
import colors from '@untitled-theme/colors/panda';

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			tokens: {
				colors,
				fonts: {
					sans: {value: 'var(--font-sans)'},
					mono: {value: 'var(--font-mono)'},
				},
				zIndex: {
					hide: {value: -1},
					auto: {value: 'auto'},
					base: {value: 0},
					docked: {value: 10},
					dropdown: {value: 1000},
					sticky: {value: 1100},
					banner: {value: 1200},
					overlay: {value: 1300},
					modal: {value: 1400},
					popover: {value: 1500},
					skipLink: {value: 1600},
					toast: {value: 1700},
					tooltip: {value: 1800},
				},
				spacing: {
					'1/4': {value: '25%'},
					'1/3': {value: '33.3333333333%'},
					'1/2': {value: '50%'},
					'2/3': {value: '66.6666666667%'},
					'3/4': {value: '75%'},
				},
			},
			keyframes: {
				'slide-in-right': {
					from: {transform: 'translateX(100%)'},
					to: {transform: 'translateX(0%)'},
				},
				'slide-out-right': {
					from: {transform: 'translateX(0%)'},
					to: {transform: 'translateX(100%)'},
				},
				'fade-in': {
					from: {opacity: 0},
					to: {opacity: 1},
				},
				'fade-out': {
					from: {opacity: 1},
					to: {opacity: 0},
				},
			},
		},
	},
	clean: true,
	outdir: 'styled-system',
	polyfill: true,
	logLevel: 'silent',
	jsxFramework: 'react',
});
