import { AUTHOR } from '@/config/author';
import { styled } from '@/styled-system/jsx';
import { TProject } from '@/types';
import { format, isBefore } from 'date-fns';

export default function Archive() {
  return (
    <styled.div py={24}>
      <styled.h1 fontSize="7xl" fontWeight="bold" color="brand.slate.lighter">
        Archive
      </styled.h1>
      <styled.p fontFamily="mono" color="brand.accent">
        A big list of things I&rsquo; worked on
      </styled.p>

      <styled.nav mt={24}>
        <styled.ul>
          {AUTHOR.projects
            .sort((i, j) => (isBefore(i.createdAt, j.createdAt) ? 1 : 0))
            .map((o) => {
              return o.featured ? null : (
                <styled.li key={o.title}>
                  <Item {...o} />
                </styled.li>
              );
            })}
        </styled.ul>
      </styled.nav>
    </styled.div>
  );
}

type ItemProps = Extract<TProject, { featured?: false }>;

function Item(props: ItemProps) {
  const { title, description, repository, website, tags, createdAt } = props;

  return (
    <styled.div>
      <styled.div>{format(createdAt, 'yyyy')}</styled.div>
      <styled.h2>{title}</styled.h2>
      <styled.p>{description}</styled.p>
      <styled.ul>
        {tags.map((tag) => (
          <styled.li key={tag}>{tag}</styled.li>
        ))}
      </styled.ul>
    </styled.div>
  );
}
