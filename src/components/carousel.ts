'use client';

import { styled } from '@/styled-system/jsx';
import { Carousel as parts } from '@ark-ui/react';

export const Carousel = styled(
  parts.Root,
  {},
  {
    defaultProps: {
      loop: true,
    },
  },
);

export const CarouselControl = styled(parts.Control);
export const CarouselIndicator = styled(parts.Indicator);
export const CarouselIndicatorGroup = styled(parts.IndicatorGroup);
export const CarouselItem = styled(parts.Item);
export const CarouselItemGroup = styled(parts.ItemGroup);
export const CarouselNextTrigger = styled(parts.NextTrigger);
export const CarouselPrevTrigger = styled(parts.PrevTrigger);
export const CarouselViewport = styled(parts.Viewport, {
  base: {
    position: 'relative',
    overflowX: 'hidden',
  },
});
