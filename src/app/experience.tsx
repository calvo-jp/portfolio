import { styled } from '@/styled-system/jsx';
import { ExperienceTabs } from './experience-tabs';
import { SectionHeading } from './section-heading';

export function Experience() {
  return (
    <styled.section id="experience" py={32}>
      <SectionHeading
        index={2}
        title={<>Where I&rsquo;ve Worked</>}
        w={{
          lg: '50%',
        }}
      />

      <ExperienceTabs />
    </styled.section>
  );
}
