import {Assign} from '@/types/utils';
import {ComponentPropsWithoutRef, forwardRef} from 'react';
import {twJoin, twMerge} from 'tailwind-merge';

interface CustomProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'outline' | 'solid';
  loading?: boolean;
}

export interface ButtonProps
  extends Assign<ComponentPropsWithoutRef<'button'>, CustomProps> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      size = 'md',
      variant = 'solid',
      loading,
      disabled,
      className,
      children,
      ...others
    } = props;

    return (
      <button
        ref={ref}
        type="button"
        disabled={loading || disabled}
        className={twMerge(
          baseClass,

          size === 'sm' && smClass,
          size === 'md' && mdClass,
          size === 'lg' && lgClass,
          size === 'xl' && xlClass,

          variant === 'solid' && solidClass,
          variant === 'outline' && outlineClass,

          className,
        )}
        {...others}
      >
        {children}
      </button>
    );
  },
);

const baseClass = twJoin(
  'inline-flex shrink-0 grow-0 items-center justify-center gap-1.5 rounded-lg outline-none transition-all duration-150 active:scale-95 disabled:cursor-not-allowed disabled:active:scale-100',
);

const smClass = twJoin('h-9 px-2.5 text-sm');
const mdClass = twJoin('h-10 px-3 text-base');
const lgClass = twJoin('h-11 px-3.5 text-lg');
const xlClass = twJoin('h-12 px-4 text-xl');

const solidClass = twJoin(
  'bg-gray-900 text-gray-100 focus:ring-4 focus:ring-gray-300/50 disabled:bg-gray-400',
);

const outlineClass = twJoin(
  'border border-gray-300 hover:border-gray-400 focus:border-gray-600 focus:ring-4 focus:ring-gray-300/50 disabled:border-gray-100 disabled:text-gray-400',
);

Button.displayName = 'Button';
