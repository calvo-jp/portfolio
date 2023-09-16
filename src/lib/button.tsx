import { Assign } from '@/types/utils';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

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
          'inline-flex shrink-0 grow-0 items-center justify-center gap-1.5 rounded-lg outline-none transition-all duration-150 active:scale-95 disabled:cursor-not-allowed disabled:active:scale-100',

          size === 'sm' && 'h-9 px-2.5 text-sm',
          size === 'md' && 'h-10 px-3 text-base',
          size === 'lg' && 'h-11 px-3.5 text-lg',
          size === 'xl' && 'h-12 px-4 text-xl',

          variant === 'solid' &&
            'bg-gray-900 text-gray-100 disabled:bg-gray-400',

          variant === 'outline' && '',

          className,
        )}
        {...others}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
