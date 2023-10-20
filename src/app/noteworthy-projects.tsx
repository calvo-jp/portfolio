import { AUTHOR } from '@/config/author';
import { styled } from '@/styled-system/jsx';
import { TProject } from '@/types';

export function NoteworthyProjects() {
  return (
    <styled.section id="noteworthy-projects">
      <styled.div></styled.div>
      <styled.div>
        {AUTHOR.projects.map((o) => {
          return o.featured ? null : <Item key={o.title} {...o} />;
        })}
      </styled.div>
    </styled.section>
  );
}

type ItemProps = Extract<TProject, { featured?: false }>;

function Item(props: ItemProps) {
  return null;
}
