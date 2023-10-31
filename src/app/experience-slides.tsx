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
import { IAuthor } from '@/types';
import { ExperienceItem } from './experience-item';

interface ExperienceSlidesProps {
  __author: IAuthor;
}

/*
 * FIXME: add "swipeable" once ark-ui carousel supports it
 */

export function ExperienceSlides(props: ExperienceSlidesProps) {
  return (
    <Carousel
      mt={14}
      lg={{
        display: 'none',
      }}
    >
      <CarouselViewport>
        <CarouselItemGroup>
          {props.__author.workHistory.map((o, index) => (
            <CarouselItem w="full" key={o.company.name} index={index}>
              <ExperienceItem data={o} />
            </CarouselItem>
          ))}
        </CarouselItemGroup>
      </CarouselViewport>
      <CarouselIndicatorGroup mt={10} display="flex" gap={3} justifyContent="center">
        {props.__author.workHistory.map((o, index) => (
          <CarouselIndicator
            key={o.company.name}
            index={index}
            css={{
              w: 3,
              h: 3,
              cursor: 'pointer',
              border: '1px solid token(colors.fg.light)',
              rounded: 'full',
              transition: 'all token(durations.slow)',

              '&[data-current]': {
                bg: 'fg.lighter',
                borderColor: 'fg.lighter',
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
