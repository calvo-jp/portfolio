import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';
import {Config} from 'tailwindcss';
import {conditions} from './conditions';
import {spacing} from './spacing';
import {zIndex} from './z-index';

export const preset: Config = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      zIndex,
      spacing,

      maxWidth: spacing,
      minWidth: spacing,
      maxHeight: spacing,
      minHeight: spacing,

      ...conditions,
    },
  },
  plugins: [typography, aspectRatio],
};
