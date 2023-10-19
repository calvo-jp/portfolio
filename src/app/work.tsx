import { AUTHOR, IProject } from '@/config/author';
import { Icon } from '@/lib/icon';
import { Link } from '@/lib/next-js';
import { HStack, styled } from '@/styled-system/jsx';
import { ExternalLinkIcon, GitBranchIcon } from 'lucide-react';
import { SectionHeading } from './section-heading';

const projects = AUTHOR.projects.filter((p) => p.featured);

export function Work() {
  return (
    <styled.section id="work" py={32}>
      <SectionHeading index={3} title={<>Some things I&rsquo;ve built</>} w="50%" />

      <styled.div mt={16}>
        {projects.map((o) => (
          <Item key={o.title} {...o} />
        ))}
      </styled.div>
    </styled.section>
  );
}

function Item(props: IProject) {
  const { title, description, featured, website, repository, tags } = props;

  return (
    <styled.div key={title}>
      <styled.div>Featured</styled.div>
      <styled.div>{title}</styled.div>
      <styled.div>{description}</styled.div>

      <styled.ul display="flex" gap={2} fontFamily="mono" fontSize="smaller">
        {tags.map((tag) => (
          <styled.li key={tag}>{tag}</styled.li>
        ))}
      </styled.ul>

      <HStack>
        {website && (
          <Link href={repository}>
            <Icon asChild>
              <ExternalLinkIcon />
            </Icon>
          </Link>
        )}

        <Link href={repository}>
          <Icon asChild>
            <GitBranchIcon />
          </Icon>
        </Link>
      </HStack>
    </styled.div>
  );
}
