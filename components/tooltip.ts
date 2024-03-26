"use client";

import { styled } from "@/styled-system/jsx";
import { Tooltip as ArkTooltip } from "@ark-ui/react";

export const Tooltip = styled(
  ArkTooltip.Root,
  {},
  {
    defaultProps: {
      openDelay: 150,
      closeDelay: 100,
      lazyMount: true,
    },
  },
);

export const TooltipTrigger = styled(ArkTooltip.Trigger, {
  base: {
    cursor: "pointer",
  },
});

export const TooltipPositioner = styled(ArkTooltip.Positioner);
export const TooltipContent = styled(ArkTooltip.Content, {
  base: {
    px: 4,
    py: 2,
    bg: "bg.lighter",
    color: "fg.strongest",
    zIndex: "tooltip",
    fontSize: "sm",
  },
});

export const TooltipArrow = styled(ArkTooltip.Arrow, {
  base: {
    "--arrow-size": "token(sizes.3)",
    "--arrow-background": "token(colors.bg.lighter)",
  },
});

export const TooltipArrowTip = styled(ArkTooltip.ArrowTip);
