import { IconExternalLink, IconGitBranch } from '@/components/icons';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/components/tooltip';
import { AUTHOR } from '@/config/author';
import { Box, Flex, HStack, VisuallyHidden, styled } from '@/styled-system/jsx';
import { INonFeaturedProject } from '@/types';
import { Portal } from '@ark-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Archive',
};

export default function Archive() {
  const items = getItems();

  return (
    <Box
      py={{
        base: 20,
        lg: 24,
      }}
    >
      <styled.h1
        fontSize={{
          base: '5xl',
          lg: '7xl',
        }}
        fontWeight="bold"
        color="neutral.200"
      >
        Archive
      </styled.h1>
      <styled.p fontFamily="mono" color="violet.500">
        A big list of things I&rsquo;ve worked on
      </styled.p>

      <Box mt={16}>
        {items.map(([year, projects]) => (
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
            <Box fontFamily="mono" fontSize="sm" lineHeight="loose" color="violet.500">
              {year}
            </Box>
            <Box>
              {projects.map((o) => (
                <Item key={o.title} {...o} />
              ))}
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}

function Item(props: INonFeaturedProject) {
  const { title, description, tags, website, repository } = props;

  return (
    <Box
      mt={{
        base: 8,
        _first: 0,
      }}
    >
      <Box>
        <styled.h2 fontSize="xl" fontWeight="bold" color="neutral.200">
          {title}
        </styled.h2>
        <styled.p color="neutral.300">{description}</styled.p>
        <styled.ul mt={3} display="flex" gap={3} fontFamily="mono" fontSize="sm">
          {tags.map((tag) => (
            <styled.li key={tag}>{tag}</styled.li>
          ))}
        </styled.ul>
      </Box>

      <HStack mt={5} gap={4}>
        {website && (
          <Tooltip>
            <TooltipTrigger asChild>
              <styled.a
                href={website}
                target="_blank"
                rel="noreferrer noopener"
                transition="colors token(durations.slow)"
                _hover={{
                  color: 'violet.500',
                }}
              >
                <IconExternalLink />
                <VisuallyHidden>Go to website</VisuallyHidden>
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
              transition="colors token(durations.slow)"
              _hover={{
                color: 'violet.500',
              }}
            >
              <IconGitBranch />
              <VisuallyHidden>Go to repository</VisuallyHidden>
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
    </Box>
  );
}

/* group by year */
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
