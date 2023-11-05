import {
	Carousel,
	CarouselIndicator,
	CarouselIndicatorGroup,
	CarouselItem,
	CarouselItemGroup,
	CarouselViewport,
} from '@/components/carousel';
import {VisuallyHidden} from '@/styled-system/jsx';
import {getAuthor} from '@/utils/get-author';
import {ExperienceItem} from './experience-item';

export async function ExperienceSlides() {
	const author = await getAuthor();

	return (
		<Carousel
			mt={14}
			lg={{
				display: 'none',
			}}
		>
			<CarouselViewport>
				<CarouselItemGroup>
					{author.workHistory.map((o, index) => (
						<CarouselItem w="full" key={o.company.name} index={index}>
							<ExperienceItem data={o} />
						</CarouselItem>
					))}
				</CarouselItemGroup>
			</CarouselViewport>
			<CarouselIndicatorGroup mt={10} display="flex" gap={3} justifyContent="center">
				{author.workHistory.map((o, index) => (
					<CarouselIndicator
						key={o.company.name}
						index={index}
						css={{
							w: 3,
							h: 3,
							border: '1px solid token(colors.fg.strong)',
							rounded: 'full',
							transition: 'all token(durations.slow)',

							'&[data-current]': {
								bg: 'fg.stronger',
								borderColor: 'fg.stronger',
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
