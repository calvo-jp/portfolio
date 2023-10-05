import clsx from 'clsx';

export const base = clsx(
  'inline-flex shrink-0 grow-0 items-center justify-center gap-1.5 rounded-lg outline-none transition-all duration-150',
  'active:scale-95',
  'disabled:cursor-not-allowed disabled:active:scale-100',
);

export const sm = clsx('h-9 px-2.5 text-sm');
export const md = clsx('h-10 px-3 text-base');
export const lg = clsx('h-11 px-3.5 text-lg');
export const xl = clsx('h-12 px-4 text-xl');

export const solid = clsx(
  'bg-gray-900 text-gray-100',
  'focus:ring-4 focus:ring-gray-300/50',
  'disabled:bg-gray-400',
);

export const outline = clsx(
  'border border-gray-300',
  'hover:border-gray-400',
  'focus:border-gray-600 focus:ring-4 focus:ring-gray-300/50',
  'disabled:border-gray-100 disabled:text-gray-400',
);
