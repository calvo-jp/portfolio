import {twMerge} from 'tailwind-merge';

export const base = twMerge(
  'inline-flex shrink-0 grow-0 items-center justify-center gap-1.5 rounded-lg outline-none transition-all duration-150',
  'active:scale-95',
  'disabled:cursor-not-allowed disabled:active:scale-100',
);

export const sm = twMerge('h-9 px-2.5 text-sm');
export const md = twMerge('h-10 px-3 text-base');
export const lg = twMerge('h-11 px-3.5 text-lg');
export const xl = twMerge('h-12 px-4 text-xl');

export const solid = twMerge(
  'bg-gray-900 text-gray-100',
  'focus:ring-4 focus:ring-gray-300/50',
  'disabled:bg-gray-400',
);

export const outline = twMerge(
  'border border-gray-300',
  'hover:border-gray-400',
  'focus:border-gray-600 focus:ring-4 focus:ring-gray-300/50',
  'disabled:border-gray-100 disabled:text-gray-400',
);
