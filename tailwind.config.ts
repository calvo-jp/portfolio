import typography from '@tailwindcss/typography';
import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
      },
    },
  },
  plugins: [typography],
};

export default config;
