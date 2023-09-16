import { Assign } from '@/types/utils';
import { cloneElement, forwardRef } from 'react';
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
    const { icon, className, ...others } = props;

    return (
      <Button
        ref={ref}
        className={twMerge(
          'p-0',
          props.size === 'sm' && 'w-9',
          props.size === 'md' && 'w-10',
          props.size === 'lg' && 'w-11',
          props.size === 'xl' && 'w-12',
          className,
        )}
        {...others}
      >
        {cloneElement<any>(icon, {
          ...icon.props,
          className: twMerge(
            props.size === 'sm' && 'w-4 h-4',
            props.size === 'md' && 'w-4.5 h-4.5',
            props.size === 'lg' && 'w-5 h-5',
            props.size === 'xl' && 'w-5.5 h-5.5',
            icon.props.className,
          ),
        })}
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';
