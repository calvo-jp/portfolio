import { AUTHOR } from '@/config/author';
import { ExternalLinkIcon, GitBranchIcon } from '@/lib/icons';
import { Image, Link } from '@/lib/next-js';
import { Flex, HStack, styled } from '@/styled-system/jsx';
import { TProject } from '@/types';
import { SectionHeading } from './section-heading';

export function Work() {
  return (
    <styled.section id="work" py={32}>
      <SectionHeading index={3} title={<>Some things I&rsquo;ve built</>} w="50%" />

      <styled.div mt={16}>
        {AUTHOR.projects.map((o) => {
          return !o.featured ? null : <Item key={o.title} {...o} />;
        })}
      </styled.div>
    </styled.section>
  );
}

type ItemProps = Extract<TProject, { featured: true }>;

function Item(props: ItemProps) {
  const { image, title, description, website, repository, tags } = props;

  return (
    <Flex
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
      <styled.div flexShrink={0} w="50%">
        <Image src={image} alt="" width={450} height={450} w="full" h="auto" />
      </styled.div>

      <styled.div>
        <styled.div fontFamily="mono" fontSize="sm" color="brand.teal" lineHeight="none">
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
            <Link href={repository}>
              <ExternalLinkIcon
                w={6}
                h={6}
                color={{
                  base: 'brand.slate.light',
                  _hover: 'brand.teal',
                }}
                transitionProperty="colors"
                transitionDuration="slow"
              />
            </Link>
          )}

          <Link href={repository}>
            <GitBranchIcon
              w={6}
              h={6}
              color={{
                base: 'brand.slate.light',
                _hover: 'brand.teal',
              }}
              transitionProperty="colors"
              transitionDuration="slow"
            />
          </Link>
        </HStack>
      </styled.div>
    </Flex>
  );
}
