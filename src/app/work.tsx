import { AUTHOR, IProject } from '@/config/author';
import { Icon } from '@/lib/icon';
import { Link } from '@/lib/next-js';
import { HStack, styled } from '@/styled-system/jsx';
import { ExternalLinkIcon, GitBranchIcon } from 'lucide-react';

const { projects } = AUTHOR;

export function Work() {
  return (
    <styled.section id="work" py={32}>
      <styled.h2 display="flex" alignItems="center" w="50%">
        <styled.span color="brand.teal" fontSize="lg" fontFamily="mono" lineHeight="none">
          03.
        </styled.span>
        <styled.span
          ml={2}
          fontSize="3xl"
          fontWeight="black"
          lineHeight="none"
          color="brand.slate.lighter"
        >
          Some things I&rsquo;ve built
        </styled.span>
        <styled.div ml={3} flexGrow={1} h="1px" bg="brand.navy.lighter" />
      </styled.h2>

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
      {featured && <styled.div>Featured</styled.div>}

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
