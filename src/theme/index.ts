import {Config} from 'tailwindcss';
import {colors} from './colors';
import {spacing} from './spacing';
import {zIndex} from './z-index';

export const preset: Config = {
  content: [],
  theme: {
    colors,
    extend: {
      zIndex,
      spacing,

      minWidth: spacing,
      maxWidth: spacing,
      minHeight: spacing,
      maxHeight: spacing,
    },
  },
};
