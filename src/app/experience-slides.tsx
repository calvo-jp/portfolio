'use client';

import {
  Carousel,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselItemGroup,
  CarouselViewport,
} from '@/components/carousel';
import { AUTHOR } from '@/config/author';
import { VisuallyHidden } from '@/styled-system/jsx';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ExperienceItem } from './experience-item';

const items = AUTHOR.workHistory;
const length = items.length;

/*
 * FIXME: drop "react-swipeable" once ark-ui carousel supports swipe
 */

export function ExperienceSlides() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref } = useSwipeable({
    onSwipedRight() {
      if (currentIndex <= 0) return;

      setCurrentIndex((v) => v - 1);
    },
    onSwipedLeft() {
      if (currentIndex + 1 >= length) return;

      setCurrentIndex((v) => v + 1);
    },
  });

  return (
    <Carousel
      mt={{
        base: 12,
        lg: 16,
      }}
      lg={{
        display: 'none',
      }}
      index={currentIndex}
      onIndexChange={(details) => {
        setCurrentIndex(details.index);
      }}
    >
      <CarouselViewport>
        <CarouselItemGroup ref={ref}>
          {items.map((o, index) => (
            <CarouselItem w="full" key={o.company.name} index={index}>
              <ExperienceItem {...o} />
            </CarouselItem>
          ))}
        </CarouselItemGroup>
      </CarouselViewport>
      <CarouselIndicatorGroup mt={10} display="flex" gap={3} justifyContent="center">
        {items.map((o, index) => (
          <CarouselIndicator
            key={o.company.name}
            index={index}
            w={3}
            h={3}
            cursor="pointer"
            rounded="full"
            border="1px solid token(colors.neutral.300)"
            transitionProperty="all"
            transitionDuration="slow"
            _current={{
              bg: 'neutral.200',
              borderColor: 'neutral.200',
            }}
          >
            <VisuallyHidden>Go to slide {++index}</VisuallyHidden>
          </CarouselIndicator>
        ))}
      </CarouselIndicatorGroup>
    </Carousel>
  );
}
