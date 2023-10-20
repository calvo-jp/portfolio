import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { ark } from '@ark-ui/react';

export const Button = styled(
  ark.button,
  cva({
    base: {
      color: 'brand.teal',
      border: '1px solid token(colors.brand.teal)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      rounded: 'sm',
      fontFamily: 'mono',
      transitionProperty: 'transform',
      transitionDuration: 'slow',

      _active: {
        transform: 'scale(0.95)',
      },

      _focusVisible: {
        outline: '2px solid token(colors.brand.slate.light)',
        outlineOffset: 0.5,
      },
    },
    variants: {
      size: {
        sm: {
          h: 8,
          px: 4,
          fontSize: 'xs',
        },
        lg: {
          h: 14,
          px: 8,
          fontSize: 'sm',
        },
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }),
);
