'use client';

import { styled } from '@/styled-system/jsx';
import * as tooltip from '@ark-ui/react/tooltip';

export const Tooltip = styled(
  tooltip.Tooltip,
  {},
  {
    defaultProps: {
      openDelay: 150,
      closeDelay: 100,
    },
  },
);

export const TooltipTrigger = styled(tooltip.TooltipTrigger);
export const TooltipPositioner = styled(tooltip.TooltipPositioner);
export const TooltipContent = styled(
  tooltip.TooltipContent,
  {
    base: {
      px: 4,
      py: 2,
      bg: 'neutral.700',
      color: 'neutral.100',
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

export const TooltipArrow = styled(tooltip.TooltipArrow, {
  base: {
    '--arrow-size': 'token(sizes.3)',
    '--arrow-background': 'token(colors.neutral.700)',
  },
});

export const TooltipArrowTip = styled(tooltip.TooltipArrowTip);
