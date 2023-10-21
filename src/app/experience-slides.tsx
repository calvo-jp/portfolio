'use client';

import { AUTHOR } from '@/config/author';
import {
  Carousel,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselItemGroup,
  CarouselViewport,
} from '@/lib/ark-ui';
import { VisuallyHidden } from '@/styled-system/jsx';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ExperienceItem } from './experience-item';

const items = AUTHOR.workHistory;
const length = items.length;

export function ExperienceSlides() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref } = useSwipeable({
    onSwipedLeft() {
      if (currentIndex <= 0) {
        setCurrentIndex(length - 1);
      } else {
        setCurrentIndex((v) => v - 1);
      }
    },
    onSwipedRight() {
      if (currentIndex + 1 >= length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((v) => v + 1);
      }
    },
  });

  return (
    <Carousel
      mt={16}
      lg={{
        display: 'none',
      }}
      loop
      index={currentIndex}
      onIndexChange={(details) => {
        setCurrentIndex(details.index);
      }}
    >
      <CarouselViewport overflowX="hidden" pos="relative">
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
            border="1px solid token(colors.brand.slate.light)"
            transitionProperty="all"
            transitionDuration="slow"
            _current={{
              bg: 'brand.slate.lighter',
              borderColor: 'brand.slate.lighter',
            }}
          >
            <VisuallyHidden>Go to slide {++index}</VisuallyHidden>
          </CarouselIndicator>
        ))}
      </CarouselIndicatorGroup>
    </Carousel>
  );
}
