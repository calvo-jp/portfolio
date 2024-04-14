'use client';

import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { ark } from '@ark-ui/react';

const recipe = cva({
  base: {
    color: 'emerald.500',
    border: '1px solid token(colors.emerald.500)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'mono',
    transition: 'transform token(durations.slow)',
    _active: {
      transform: 'scale(0.95)',
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
});

export const Button = styled(ark.button, recipe, {
  defaultProps: {
    type: 'button',
  },
});
