import { styled } from '@/styled-system/jsx';
import * as tooltip from '@ark-ui/react/tooltip';

export const Tooltip = styled(
  tooltip.Tooltip,
  {},
  {
    defaultProps: {
      openDelay: 0,
      closeDelay: 0,
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
      bg: 'neutral.200',
      color: 'neutral.800',
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
    '--arrow-background': 'token(colors.neutral.200)',
  },
});

export const TooltipArrowTip = styled(tooltip.TooltipArrowTip);
