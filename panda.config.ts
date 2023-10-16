import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: { value: 'var(--font-sans)' },
          mono: { value: 'var(--font-mono)' },
        },
        colors: {
          brand: {
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
            white: { value: '#e6f1ff' },
            green: { value: '#64ffda' },
          },
        },
      },
    },
  },
  outdir: 'styled-system',
  jsxFramework: 'react',
});
