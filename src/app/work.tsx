import { AUTHOR } from '@/config/author';
import { ExternalLinkIcon, GitBranchIcon } from '@/lib/icons';
import { Image } from '@/lib/next-js';
import { Flex, HStack, VisuallyHidden, styled } from '@/styled-system/jsx';
import { IFeaturedProject } from '@/types';
import { SectionHeading } from './section-heading';

const projects = [...AUTHOR.projects].filter((o) => o.featured) as IFeaturedProject[];

export function Work() {
  return (
    <styled.section id="work" py={32}>
      <SectionHeading
        index={3}
        title={<>Some things I&rsquo;ve built</>}
        lg={{
          w: '50%',
        }}
      />

      <styled.div mt={16}>
        {projects.map((o) => (
          <Item key={o.title} {...o} />
        ))}
      </styled.div>
    </styled.section>
  );
}

function Item(props: IFeaturedProject) {
  const { image, title, description, website, repository, tags } = props;

  return (
    <Flex
      w="full"
      mt={{
        base: 24,
        _first: 0,
      }}
      _even={{
        flexDir: 'row-reverse',
      }}
      gap={10}
      alignItems="center"
    >
      <styled.div
        w="50%"
        flexShrink={0}
        lgDown={{
          display: 'none',
        }}
      >
        <Image src={image} alt="" width={450} height={450} w="full" h="auto" />
      </styled.div>

      <styled.div flexGrow={1}>
        <styled.div
          fontFamily="mono"
          fontSize="sm"
          color="brand.accent"
          lineHeight="none"
        >
          Featured Project
        </styled.div>

        <styled.h3
          mt={1}
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="none"
          color="brand.slate.lighter"
        >
          {title}
        </styled.h3>

        <styled.p
          mt={5}
          bg="brand.navy.light"
          px={5}
          py={4}
          rounded="sm"
          color="brand.slate.light"
          hyphens="auto"
        >
          {description}
        </styled.p>

        <styled.ul mt={4} display="flex" gap={4} fontFamily="mono" fontSize="smaller">
          {tags.map((tag) => (
            <styled.li key={tag}>{tag}</styled.li>
          ))}
        </styled.ul>

        <HStack mt={8} gap={4}>
          {website && (
            <styled.a
              href={website}
              target="_blank"
              rel="noreferrer noopener"
              color={{
                base: 'brand.slate.light',
                _hover: 'brand.accent',
              }}
              transitionProperty="colors"
              transitionDuration="slow"
            >
              <ExternalLinkIcon w={6} h={6} />
              <VisuallyHidden>Go to website</VisuallyHidden>
            </styled.a>
          )}

          <styled.a
            href={repository}
            target="_blank"
            rel="noreferrer noopener"
            color={{
              base: 'brand.slate.light',
              _hover: 'brand.accent',
            }}
            transitionProperty="colors"
            transitionDuration="slow"
          >
            <GitBranchIcon w={6} h={6} />
            <VisuallyHidden>Go to repository</VisuallyHidden>
          </styled.a>
        </HStack>
      </styled.div>
    </Flex>
  );
}
