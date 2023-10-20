import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { ark } from '@ark-ui/react';

export const Button = styled(
  ark.button,
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      color: 'brand.teal',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'brand.teal',
      rounded: 'sm',
      fontFamily: 'mono',
      transitionProperty: 'transform',
      transitionDuration: 'slow',
      cursor: 'pointer',

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
