import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			tokens: {
				fonts: {
					sans: {
						value: 'var(--font-geist-sans)',
					},
					mono: {
						value: 'var(--font-geist-mono)',
					},
				},
				zIndex: {
					hide: {
						value: -1,
					},
					auto: {
						value: 'auto',
					},
					base: {
						value: 0,
					},
					docked: {
						value: 10,
					},
					dropdown: {
						value: 1000,
					},
					sticky: {
						value: 1100,
					},
					banner: {
						value: 1200,
					},
					overlay: {
						value: 1300,
					},
					modal: {
						value: 1400,
					},
					popover: {
						value: 1500,
					},
					skipLink: {
						value: 1600,
					},
					toast: {
						value: 1700,
					},
					tooltip: {
						value: 1800,
					},
				},
				spacing: {
					'1/4': { value: '25%' },
					'1/3': { value: '33.3333333333%' },
					'1/2': { value: '50%' },
					'2/3': { value: '66.6666666667%' },
					'3/4': { value: '75%' },
				},
			},
			semanticTokens: {
				colors: {
					fg: {
						DEFAULT: {
							value: {
								_dark: '{colors.neutral.400}',
								_light: '{colors.neutral.600}',
							},
						},
						strong: {
							value: {
								_dark: '{colors.neutral.300}',
								_light: '{colors.neutral.700}',
							},
						},
						stronger: {
							value: {
								_dark: '{colors.neutral.200}',
								_light: '{colors.neutral.800}',
							},
						},
						strongest: {
							value: {
								_dark: '{colors.neutral.100}',
								_light: '{colors.neutral.900}',
							},
						},
						accent: {
							value: {
								_dark: '{colors.violet.500}',
								_light: '{colors.violet.700}',
							},
						},
						high: {
							value: {
								_dark: '{colors.white}',
								_light: '{colors.black}',
							},
						},
					},
					bg: {
						DEFAULT: {
							value: {
								_dark: '{colors.neutral.900}',
								_light: '{colors.neutral.100}',
							},
						},
						alpha: {
							value: {
								_dark: '#171717db' /* FIXME: use "<color>/<opacity>" once supported */,
								_light: '#f5f5f5db' /* FIXME: use "<color>/<opacity>" once supported */,
							},
						},
						light: {
							value: {
								_dark: '{colors.neutral.800}',
								_light: '{colors.neutral.200}',
							},
						},
						lighter: {
							value: {
								_dark: '{colors.neutral.700}',
								_light: '{colors.neutral.300}',
							},
						},
					},
				},
			},
			keyframes: {
				'slide-in-right': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0%)' },
				},
				'slide-out-right': {
					from: { transform: 'translateX(0%)' },
					to: { transform: 'translateX(100%)' },
				},
				'fade-in': {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				'fade-out': {
					from: { opacity: 1 },
					to: { opacity: 0 },
				},
			},
		},
	},
	hash: true,
	clean: true,
	outdir: 'styled-system',
	jsxFramework: 'react',
});
