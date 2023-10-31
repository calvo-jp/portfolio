import { IconExternalLink, IconGitBranch } from '@/components/icons';
import { Link } from '@/components/link';
import { RawHtml } from '@/components/raw-html';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/components/tooltip';
import { Box, Flex, HStack, VisuallyHidden, styled } from '@/styled-system/jsx';
import { IProject } from '@/types';
import { getAuthor } from '@/utils/get-author';
import { Portal } from '@ark-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Archive',
};

export default async function Archive() {
  const items = await getItems();

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
        color="fg.lighter"
      >
        Archive
      </styled.h1>
      <styled.p fontFamily="mono" color="accent">
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
            <Box fontFamily="mono" fontSize="sm" lineHeight="loose" color="accent">
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

function Item(props: IProject) {
  const { title, description, tags, website, repository } = props;

  return (
    <Box
      mt={{
        base: 8,
        _first: 0,
      }}
    >
      <Box>
        <styled.h2 fontSize="xl" fontWeight="bold" color="fg.lighter">
          {title}
        </styled.h2>
        <RawHtml color="fg.light">{description}</RawHtml>
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
              <Link
                href={website}
                target="_blank"
                rel="noreferrer noopener"
                prefetch={false}
                transition="colors token(durations.slow)"
                _hover={{
                  color: 'accent',
                }}
              >
                <IconExternalLink />
                <VisuallyHidden>Go to website</VisuallyHidden>
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
                color: 'accent',
              }}
            >
              <IconGitBranch />
              <VisuallyHidden>Go to repository</VisuallyHidden>
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
    </Box>
  );
}

/* group by year */
async function getItems() {
  const l = (await getAuthor()).projects;

  const f = [...l].filter((p) => !p.featured);
  const r: Record<string, IProject[]> = {};

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
