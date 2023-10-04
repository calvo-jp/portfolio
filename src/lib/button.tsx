import {Assign} from '@/types/utils';
import {ComponentPropsWithoutRef, forwardRef} from 'react';
import {twMerge} from 'tailwind-merge';
import * as styles from './button.styles';

type Size = 'sm' | 'md' | 'lg' | 'xl';
type Variant = 'outline' | 'solid';

interface BaseProps {
  size?: Size;
  variant?: Variant;
  loading?: boolean;
}

export interface ButtonProps
  extends Assign<ComponentPropsWithoutRef<'button'>, BaseProps> {}

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
          styles.base,

          size === 'sm' && styles.sm,
          size === 'md' && styles.md,
          size === 'lg' && styles.lg,
          size === 'xl' && styles.xl,

          variant === 'solid' && styles.solid,
          variant === 'outline' && styles.outline,

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
