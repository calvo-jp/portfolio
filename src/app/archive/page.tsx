import { Icon } from '@/components/icon';
import { Link } from '@/components/link';
import { Prose } from '@/components/prose';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/components/tooltip';
import { Box, Flex, HStack, VisuallyHidden, styled } from '@/styled-system/jsx';
import { getAuthor } from '@/utils/get-author';
import { TNonFeaturedProject } from '@/utils/types';
import { Portal } from '@ark-ui/react';
import {
  GitBranch02Icon,
  LinkExternal02Icon,
} from '@untitled-theme/icons-react';
import { format } from 'date-fns';
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
        color="neutral.200"
      >
        Archive
      </styled.h1>
      <styled.p fontFamily="mono" color="violet.500">
        A list of things I&rsquo;ve worked&nbsp;on
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
            <Box
              fontFamily="mono"
              fontSize="sm"
              lineHeight="loose"
              color="violet.500"
            >
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

function Item(props: TNonFeaturedProject) {
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
        <Prose color="neutral.300">{description}</Prose>
        <styled.ul
          mt={3}
          display="flex"
          gap={3}
          fontFamily="mono"
          fontSize="sm"
        >
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
                  color: 'violet.500',
                }}
              >
                <Icon asChild>
                  <LinkExternal02Icon strokeWidth="1.66667" />
                </Icon>
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
                color: 'violet.500',
              }}
            >
              <Icon asChild>
                <GitBranch02Icon strokeWidth="1.66667" />
              </Icon>
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
  const { projects } = await getAuthor();

  const r: Record<string, TNonFeaturedProject[]> = {};

  projects.forEach((i) => {
    if (!i.featured && !i.noteworthy) {
      const k = format(i.createdAt, 'yyyy');

      if (r[k]) {
        r[k].push(i);
      } else {
        r[k] = [i];
      }
    }
  });

  const e = Object.entries(r);
  const s = [...e];

  s.sort(([i], [j]) => j.localeCompare(i));

  return s;
}
