'use client';

import {
  Carousel,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselItemGroup,
  CarouselViewport,
} from '@/components/carousel';
import { VisuallyHidden } from '@/styled-system/jsx';
import { IWorkHistory } from '@/types';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ExperienceItem } from './experience-item';

/*
 * FIXME: drop "react-swipeable" once ark-ui carousel supports swipe
 */

interface ExperienceSlidesProps {
  data: IWorkHistory[];
}

export function ExperienceSlides({ data }: ExperienceSlidesProps) {
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
      mt={14}
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
          {data.map((o, index) => (
            <CarouselItem w="full" key={o.company.name} index={index}>
              <ExperienceItem data={o} />
            </CarouselItem>
          ))}
        </CarouselItemGroup>
      </CarouselViewport>
      <CarouselIndicatorGroup mt={10} display="flex" gap={3} justifyContent="center">
        {data.map((o, index) => (
          <CarouselIndicator
            key={o.company.name}
            index={index}
            css={{
              w: 3,
              h: 3,
              cursor: 'pointer',
              border: '1px solid token(colors.neutral.300)',
              rounded: 'full',
              transition: 'all token(durations.slow)',

              '&[data-current]': {
                bg: 'neutral.200',
                borderColor: 'neutral.200',
              },
            }}
          >
            <VisuallyHidden>Go to slide {++index}</VisuallyHidden>
          </CarouselIndicator>
        ))}
      </CarouselIndicatorGroup>
    </Carousel>
  );
}
