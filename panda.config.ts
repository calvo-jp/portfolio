import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: {
            value: 'var(--font-sans)',
          },
          mono: {
            value: 'var(--font-mono)',
          },
        },
        colors: {
          brand: {
            white: { value: '#e6f1ff' },
            accent: { value: '#64ffda' },
            navy: {
              DEFAULT: { value: '#0a192f' },
              light: { value: '#112240' },
              lighter: { value: '#233554' },
            },
            slate: {
              DEFAULT: { value: '#8892b0' },
              light: { value: '#a8b2d1' },
              lighter: { value: '#ccd6f6' },
            },
          },
        },
        zIndex: {
          hide: { value: -1 },
          auto: { value: 'auto' },
          base: { value: 0 },
          docked: { value: 10 },
          dropdown: { value: 1000 },
          sticky: { value: 1100 },
          banner: { value: 1200 },
          overlay: { value: 1300 },
          modal: { value: 1400 },
          popover: { value: 1500 },
          skipLink: { value: 1600 },
          toast: { value: 1700 },
          tooltip: { value: 1800 },
        },
      },
      keyframes: {
        slideInLeft: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        slideOutLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  },
  outdir: 'styled-system',
  jsxFramework: 'react',
});
