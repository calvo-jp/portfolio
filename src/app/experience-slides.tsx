import { AUTHOR } from '@/config/author';
import {
  Carousel,
  CarouselControl,
  CarouselItem,
  CarouselItemGroup,
  CarouselViewport,
} from '@/lib/ark-ui';
import { ChevronLeftIcon, ChevronRightIcon } from '@/lib/icons';
import { CarouselNextTrigger, CarouselPrevTrigger } from '@ark-ui/react';
import { ExperienceItem } from './experience-item';

export function ExperienceSlides() {
  return (
    <Carousel
      mt={16}
      lg={{
        display: 'none',
      }}
      loop
    >
      <CarouselViewport overflowX="hidden" pos="relative">
        <CarouselItemGroup>
          {AUTHOR.workHistory.map((o, index) => (
            <CarouselItem w="full" key={o.company.name} index={index}>
              <ExperienceItem {...o} />
            </CarouselItem>
          ))}
        </CarouselItemGroup>
      </CarouselViewport>
      <CarouselControl display="flex" gap={5} justifyContent="center" mt={8}>
        <CarouselPrevTrigger>
          <ChevronLeftIcon w={7} h={7} color="brand.slate.light" />
        </CarouselPrevTrigger>
        <CarouselNextTrigger>
          <ChevronRightIcon w={7} h={7} color="brand.slate.light" />
        </CarouselNextTrigger>
      </CarouselControl>
    </Carousel>
  );
}
