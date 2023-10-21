import { AUTHOR } from '@/config/author';
import { ExternalLinkIcon, GitBranchIcon } from '@/lib/icons';
import { Flex, HStack, VisuallyHidden, styled } from '@/styled-system/jsx';
import { INonFeaturedProject } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${AUTHOR.name} | Archive`,
};

export default function Archive() {
  const items = getItems();

  return (
    <styled.div py={24}>
      <styled.h1
        fontSize={{
          base: '5xl',
          lg: '7xl',
        }}
        fontWeight="bold"
        color="brand.slate.lighter"
      >
        Archive
      </styled.h1>
      <styled.p fontFamily="mono" color="brand.accent">
        A big list of things I&rsquo;ve worked on
      </styled.p>

      <styled.div mt={16}>
        {items.map(([year, projects]) => {
          return (
            <Flex
              key={year}
              gap={{
                base: 4,
                lg: 12,
              }}
              mt={{
                base: 8,
                _first: 0,
              }}
              flexDir={{
                base: 'column',
                lg: 'row',
              }}
            >
              <styled.div
                fontFamily="mono"
                fontSize="sm"
                lineHeight="loose"
                color="brand.accent"
              >
                {year}
              </styled.div>
              <styled.div>
                {projects.map((o) => (
                  <Item key={o.title} {...o} />
                ))}
              </styled.div>
            </Flex>
          );
        })}
      </styled.div>
    </styled.div>
  );
}

function Item(props: INonFeaturedProject) {
  const { title, description, tags, website, repository } = props;

  return (
    <styled.div
      mt={{
        base: 8,
        _first: 0,
      }}
    >
      <styled.div>
        <styled.h2 fontSize="xl" fontWeight="bold" color="brand.slate.lighter">
          {title}
        </styled.h2>
        <styled.p color="brand.slate.light">{description}</styled.p>
        <styled.ul mt={3} display="flex" gap={3} fontFamily="mono" fontSize="sm">
          {tags.map((tag) => (
            <styled.li key={tag}>{tag}</styled.li>
          ))}
        </styled.ul>
      </styled.div>

      <HStack mt={5} gap={4}>
        {website && (
          <styled.a
            href={website}
            target="_blank"
            rel="noreferrer noopener"
            transitionProperty="colors"
            transitionDuration="slow"
            _hover={{
              color: 'brand.accent',
            }}
          >
            <ExternalLinkIcon w={5} h={5} />
            <VisuallyHidden>Go to website</VisuallyHidden>
          </styled.a>
        )}

        <styled.a
          href={repository}
          target="_blank"
          rel="noreferrer noopener"
          transitionProperty="colors"
          transitionDuration="slow"
          _hover={{
            color: 'brand.accent',
          }}
        >
          <GitBranchIcon w={5} h={5} />
          <VisuallyHidden>Go to repository</VisuallyHidden>
        </styled.a>
      </HStack>
    </styled.div>
  );
}

function getItems() {
  const f = [...AUTHOR.projects].filter((p) => !p.featured) as INonFeaturedProject[];
  const r: Record<string, INonFeaturedProject[]> = {};

  f.forEach((i) => {
    const k = i.createdAt.getFullYear().toString();

    if (r[k]) {
      r[k].push(i);
    } else {
      r[k] = [i];
    }
  });

  const e = Object.entries(r);
  const s = [...e];

  s.sort(([i], [j]) => j.localeCompare(i));

  return s;
}
