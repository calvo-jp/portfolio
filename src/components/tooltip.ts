'use client';

import { styled } from '@/styled-system/jsx';
import { Tooltip as parts } from '@ark-ui/react';

export const Tooltip = styled(
  parts.Root,
  {},
  {
    defaultProps: {
      openDelay: 150,
      closeDelay: 100,
    },
  },
);

export const TooltipTrigger = styled(parts.Trigger, {
  base: {
    cursor: 'pointer',
  },
});

export const TooltipPositioner = styled(parts.Positioner);
export const TooltipContent = styled(
  parts.Content,
  {
    base: {
      px: 4,
      py: 2,
      bg: 'bg.lighter',
      color: 'fg.strongest',
      zIndex: 'tooltip',
      rounded: 'md',
      fontSize: 'sm',
    },
  },
  {
    defaultProps: {
      lazyMount: true,
      unmountOnExit: false,
    },
  },
);

export const TooltipArrow = styled(parts.Arrow, {
  base: {
    '--arrow-size': 'token(sizes.3)',
    '--arrow-background': 'token(colors.bg.lighter)',
  },
});

export const TooltipArrowTip = styled(parts.ArrowTip);
