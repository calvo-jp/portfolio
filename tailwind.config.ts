import typography from '@tailwindcss/typography';
import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      zIndex: {
        hide: '-1',
        auto: 'auto',
        dropdown: '1000',
        sticky: '1100',
        overlay: '1200',
        modal: '1300',
        popover: '1400',
        toast: '1500',
        tooltip: '1600',
      },
      data: {
        loading: 'loading="true"',
        disabled: 'disabled="true"',
      },
    },
  },
  plugins: [typography],
};

export default config;
