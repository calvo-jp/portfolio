import { AUTHOR } from '@/config/author';
import { ExternalLinkIcon, FolderIcon, GitBranchIcon } from '@/lib/icons';
import { Link } from '@/lib/next-js';
import { Flex, Grid, HStack, Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { INonFeaturedProject } from '@/types';

export function NoteworthyProjects() {
  return (
    <styled.section id="noteworthy-projects" py={32}>
      <styled.div textAlign="center">
        <styled.h2 fontSize="3xl" fontWeight="black" color="brand.slate.lighter">
          Other Noteworthy Projects
        </styled.h2>
        <Link
          href="/archive"
          w="fit"
          mx="auto"
          mt={2}
          color="brand.accent"
          fontFamily="mono"
          fontSize="sm"
          display="block"
          textUnderlineOffset="0.35rem"
          _hover={{
            textDecoration: 'underline',
          }}
        >
          view the archive
        </Link>
      </styled.div>

      <Grid mt={16} gap={4} gridTemplateColumns="repeat(3,1fr)">
        {AUTHOR.projects.map((o) => {
          return o.featured ? null : <Item key={o.title} {...o} />;
        })}
      </Grid>
    </styled.section>
  );
}

function Item(props: INonFeaturedProject) {
  const { title, description, repository, website, tags } = props;

  return (
    <Flex bg="brand.navy.light" p={8} rounded="sm" flexDir="column">
      <Flex>
        <FolderIcon w={9} h={9} color="brand.accent" />
        <Spacer />
        <HStack gap={4}>
          {website && (
            <styled.a
              href={website}
              transitionProperty="colors"
              transitionDuration="slow"
              _hover={{
                color: 'brand.accent',
              }}
            >
              <VisuallyHidden>Go to website</VisuallyHidden>
              <ExternalLinkIcon w={5} h={5} />
            </styled.a>
          )}

          <styled.a
            href={repository}
            transitionProperty="colors"
            transitionDuration="slow"
            _hover={{
              color: 'brand.accent',
            }}
          >
            <VisuallyHidden>Go to repository</VisuallyHidden>
            <GitBranchIcon w={5} h={5} />
          </styled.a>
        </HStack>
      </Flex>

      <styled.h3 mt={6} fontSize="lg" fontWeight="bold" color="brand.slate.lighter">
        {title}
      </styled.h3>

      <styled.p
        mt={2}
        fontSize="sm"
        color="brand.slate.light"
        flexGrow={1}
        hyphens="auto"
      >
        {description}
      </styled.p>

      <styled.ul mt={6} display="flex" gap={3} fontFamily="mono" fontSize="xs">
        {tags.map((tag) => (
          <styled.li key={tag}>{tag}</styled.li>
        ))}
      </styled.ul>
    </Flex>
  );
}
