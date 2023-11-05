import { styled } from '@/styled-system/jsx';
import { ExperienceSlides } from './experience-slides';
import { ExperienceTabs } from './experience-tabs';
import { SectionHeading } from './section-heading';

export async function Experience() {
	return (
		<styled.section
			id="experience"
			py={{
				base: 16,
				lg: 32,
			}}
		>
			<SectionHeading
				index={2}
				title={<>Where I&rsquo;ve Worked</>}
				lg={{
					w: '1/2',
				}}
			/>

			<ExperienceTabs />
			<ExperienceSlides />
		</styled.section>
	);
}
