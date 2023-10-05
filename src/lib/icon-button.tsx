import {Assign} from '@/types/utils';
import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  SVGProps,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';
import {Button, ButtonProps} from './button';

interface BaseProps {
  icon: JSX.Element;
  round?: boolean;
  'aria-label': string;
  children?: never;
}

export interface IconButtonProps extends Assign<ButtonProps, BaseProps> {}

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
        className={clsx(
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
              className: clsx(
                size === 'sm' && 'h-5 w-5',
                size === 'md' && 'h-6 w-6',
                size === 'lg' && 'h-7 w-7',
                size === 'xl' && 'h-8 w-8',
                icon.props.className,
              ),
            })}

        <span className="sr-only">{props['aria-label']}</span>
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';
