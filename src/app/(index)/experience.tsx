import { styled } from '@/styled-system/jsx';
import { ExperienceTabs } from './experience-tabs';
import { ExperienceTree } from './experience-tree';
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
        index={1}
        title={<>Where I&rsquo;ve Worked</>}
        lg={{
          w: '1/2',
        }}
      />

      <ExperienceTabs />
      <ExperienceTree />
    </styled.section>
  );
}
