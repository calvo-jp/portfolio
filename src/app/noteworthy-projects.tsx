import { AUTHOR } from '@/config/author';
import { ExternalLinkIcon, FolderIcon, GitBranchIcon } from '@/lib/icons';
import { Link } from '@/lib/link';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/lib/tooltip';
import { Flex, Grid, HStack, Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { INonFeaturedProject } from '@/types';
import { Portal } from '@ark-ui/react';

const items = AUTHOR.projects.filter((o) => !o.featured) as INonFeaturedProject[];

export function NoteworthyProjects() {
  return (
    <styled.section id="noteworthy-projects" py={32}>
      <styled.div textAlign="center">
        <styled.h2
          fontSize={{
            base: '2xl',
            lg: '3xl',
          }}
          fontWeight="black"
          color="brand.slate.lighter"
        >
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

      <Grid
        mt={16}
        gap={4}
        gridTemplateColumns={{
          lg: 'repeat(3,1fr)',
        }}
      >
        {items.map((o) => (
          <Item key={o.title} {...o} />
        ))}
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
            <Tooltip>
              <TooltipTrigger asChild>
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
                  <VisuallyHidden>Go to website</VisuallyHidden>
                  <ExternalLinkIcon w={5} h={5} />
                </styled.a>
              </TooltipTrigger>

              <Portal>
                <TooltipPositioner>
                  <TooltipContent>
                    <TooltipArrow>
                      <TooltipArrowTip />
                    </TooltipArrow>
                    <styled.span>Website</styled.span>
                  </TooltipContent>
                </TooltipPositioner>
              </Portal>
            </Tooltip>
          )}

          <Tooltip>
            <TooltipTrigger asChild>
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
                <VisuallyHidden>Go to repository</VisuallyHidden>
                <GitBranchIcon w={5} h={5} />
              </styled.a>
            </TooltipTrigger>

            <Portal>
              <TooltipPositioner>
                <TooltipContent>
                  <TooltipArrow>
                    <TooltipArrowTip />
                  </TooltipArrow>
                  <styled.span>Repository</styled.span>
                </TooltipContent>
              </TooltipPositioner>
            </Portal>
          </Tooltip>
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
