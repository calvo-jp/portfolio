'use client';

import { styled } from '@/styled-system/jsx';
import * as carousel from '@ark-ui/react/carousel';

export const Carousel = styled(
  carousel.Carousel,
  {},
  {
    defaultProps: {
      loop: true,
    },
  },
);

export const CarouselControl = styled(carousel.CarouselControl);
export const CarouselIndicator = styled(carousel.CarouselIndicator);
export const CarouselIndicatorGroup = styled(carousel.CarouselIndicatorGroup);
export const CarouselItem = styled(carousel.CarouselItem);
export const CarouselItemGroup = styled(carousel.CarouselItemGroup);
export const CarouselNextTrigger = styled(carousel.CarouselNextTrigger);
export const CarouselPrevTrigger = styled(carousel.CarouselPrevTrigger);
export const CarouselViewport = styled(carousel.CarouselViewport, {
  base: {
    position: 'relative',
    overflowX: 'hidden',
  },
});
