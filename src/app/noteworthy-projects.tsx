import { IconExternalLink, IconFolder, IconGitBranch } from '@/components/icons';
import { Link } from '@/components/link';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/components/tooltip';
import { AUTHOR } from '@/config/author';
import {
  Box,
  Flex,
  Grid,
  HStack,
  Spacer,
  VisuallyHidden,
  styled,
} from '@/styled-system/jsx';
import { INonFeaturedProject } from '@/types';
import { Portal } from '@ark-ui/react';

const items = AUTHOR.projects.filter((o) => !o.featured) as INonFeaturedProject[];

export function NoteworthyProjects() {
  return (
    <styled.section
      id="noteworthy-projects"
      py={{
        base: 24,
        lg: 32,
      }}
    >
      <Box textAlign="center">
        <styled.h2
          fontSize={{
            base: '2xl',
            lg: '3xl',
          }}
          fontWeight="black"
          color="neutral.200"
        >
          Other Noteworthy Projects
        </styled.h2>
        <Link
          href="/archive"
          w="fit"
          mx="auto"
          mt={2}
          color="violet.500"
          fontFamily="mono"
          fontSize="sm"
          display="block"
          whiteSpace="nowrap"
          textUnderlineOffset="0.35rem"
          _hover={{
            textDecoration: 'underline',
          }}
        >
          view the archive
        </Link>
      </Box>

      <Grid
        mt={{
          base: 14,
          lg: 16,
        }}
        gap={4}
        gridTemplateColumns={{
          lg: 'repeat(2,1fr)',
          xl: 'repeat(3,1fr)',
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
    <Flex bg="neutral.800" p={8} rounded="sm" flexDir="column" minH="token(spacing.80)">
      <Flex>
        <IconFolder w={9} h={9} color="violet.500" />
        <Spacer />
        <HStack gap={4}>
          {website && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={website}
                  target="_blank"
                  rel="noreferrer noopener"
                  prefetch={false}
                  transition="colors token(durations.slow)"
                  _hover={{
                    color: 'violet.500',
                  }}
                >
                  <VisuallyHidden>Go to website</VisuallyHidden>
                  <IconExternalLink />
                </Link>
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
              <Link
                href={repository}
                target="_blank"
                rel="noreferrer noopener"
                prefetch={false}
                transition="colors token(durations.slow)"
                _hover={{
                  color: 'violet.500',
                }}
              >
                <VisuallyHidden>Go to repository</VisuallyHidden>
                <IconGitBranch />
              </Link>
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

      <styled.h3 mt={6} fontSize="lg" fontWeight="bold" color="neutral.200">
        {title}
      </styled.h3>

      <styled.p mt={2} fontSize="sm" color="neutral.300" flexGrow={1} hyphens="auto">
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
