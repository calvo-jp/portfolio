import { getAuthor } from '@/lib/get-author';
import { Icon } from '@/lib/icon';
import { Link } from '@/lib/link';
import { Prose } from '@/lib/prose';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/lib/tooltip';
import { TNonFeaturedProject } from '@/lib/types';
import {
  Box,
  Flex,
  HStack,
  Spacer,
  VisuallyHidden,
  styled,
} from '@/styled-system/jsx';
import { Portal } from '@ark-ui/react';
import {
  FolderIcon,
  GitBranch02Icon,
  LinkExternal02Icon,
} from '@untitled-theme/icons-react';

export async function NoteworthyProjects() {
  const author = await getAuthor();

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
          color="zinc.200"
        >
          Other Noteworthy Projects
        </styled.h2>
        <Link
          href="/archive"
          w="fit"
          mx="auto"
          mt={2}
          color="emerald.500"
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

      <Box
        mt={{
          base: 14,
          lg: 16,
        }}
        display="grid"
        gap={4}
        gridTemplateColumns={{
          lg: 'repeat(2,1fr)',
          xl: 'repeat(3,1fr)',
        }}
      >
        {author.projects.map((o) => {
          if (o.featured) {
            return null;
          } else if (!o.noteworthy) {
            return null;
          } else {
            return <Item key={o.title} data={o} />;
          }
        })}
      </Box>
    </styled.section>
  );
}

interface ItemProps {
  data: TNonFeaturedProject;
}

function Item(props: ItemProps) {
  const { title, description, repository, website, tags } = props.data;

  return (
    <Flex bg="zinc.800" p={8} flexDir="column" minH="token(spacing.80)">
      <Flex alignItems="start">
        <Icon w={9} h={9} color="emerald.500" asChild>
          <FolderIcon strokeWidth="1.66667" />
        </Icon>
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
                    color: 'emerald.500',
                  }}
                >
                  <VisuallyHidden>Go to website</VisuallyHidden>
                  <Icon asChild>
                    <LinkExternal02Icon strokeWidth="1.66667" />
                  </Icon>
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
                  color: 'emerald.500',
                }}
              >
                <VisuallyHidden>Go to repository</VisuallyHidden>
                <Icon asChild>
                  <GitBranch02Icon strokeWidth="1.66667" />
                </Icon>
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

      <styled.h3 mt={6} fontSize="lg" fontWeight="bold" color="zinc.200">
        {title}
      </styled.h3>

      <Prose mt={2} fontSize="sm" color="zinc.300" flexGrow={1}>
        {description}
      </Prose>

      <styled.ul mt={6} display="flex" gap={3} fontFamily="mono" fontSize="xs">
        {tags.map((tag) => (
          <styled.li key={tag}>{tag}</styled.li>
        ))}
      </styled.ul>
    </Flex>
  );
}
