import {Config} from 'tailwindcss';
import {preset} from './src/theme';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/lib/**/*.{ts,tsx}'],
  presets: [preset],
};

export default config;
