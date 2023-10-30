import { styled } from '@/styled-system/jsx';
import { getAuthor } from '@/utils/get-author';
import { ExperienceSlides } from './experience-slides';
import { ExperienceTabs } from './experience-tabs';
import { SectionHeading } from './section-heading';

export async function Experience() {
  const author = await getAuthor();

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

      <ExperienceTabs data={author.workHistory} />
      <ExperienceSlides data={author.workHistory} />
    </styled.section>
  );
}
