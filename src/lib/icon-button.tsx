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
  'aria-label': string;
  children?: never;
}

export interface IconButtonProps extends Assign<ButtonProps, CustomProps> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      size = 'md',
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
          className,
        )}
        {...others}
      >
        {!isValidElement<SVGProps<SVGSVGElement>>(icon)
          ? null
          : cloneElement<ComponentPropsWithoutRef<'svg'>>(icon, {
              className: twMerge(
                size === 'sm' && 'w-4 h-4',
                size === 'md' && 'w-4.5 h-4.5',
                size === 'lg' && 'w-5 h-5',
                size === 'xl' && 'w-5.5 h-5.5',
                icon.props.className,
              ),
            })}

        <span className="sr-only">{props['aria-label']}</span>
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';
