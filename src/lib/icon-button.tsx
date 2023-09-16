import { Assign } from '@/types/utils';
import {
  ComponentPropsWithoutRef,
  SVGProps,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { Button, ButtonProps } from './button';

interface CustomProps {
  icon: JSX.Element;
  round?: boolean;
  'aria-label': string;
  children?: never;
}

export interface IconButtonProps extends Assign<ButtonProps, CustomProps> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      size = 'md',
      round = false,
      variant = 'solid',
      className,
      ...others
    } = props;

    return (
      <Button
        ref={ref}
        size={size}
        variant={variant}
        className={twMerge(
          'p-0',
          size === 'sm' && 'w-9',
          size === 'md' && 'w-10',
          size === 'lg' && 'w-11',
          size === 'xl' && 'w-12',
          round && 'rounded-full',
          className,
        )}
        {...others}
      >
        {!isValidElement<SVGProps<SVGSVGElement>>(icon)
          ? null
          : cloneElement<ComponentPropsWithoutRef<'svg'>>(icon, {
              className: twMerge(
                size === 'sm' && 'w-5 h-5',
                size === 'md' && 'w-6 h-6',
                size === 'lg' && 'w-7 h-7',
                size === 'xl' && 'w-8 h-8',
                icon.props.className,
              ),
            })}

        <span className="sr-only">{props['aria-label']}</span>
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';
