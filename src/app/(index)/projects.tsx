import { getAuthor } from '@/lib/get-author';
import { Icon } from '@/lib/icon';
import { Image } from '@/lib/image';
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
import { TFeaturedProject } from '@/lib/types';
import { Box, Flex, HStack, VisuallyHidden, styled } from '@/styled-system/jsx';
import { Portal } from '@ark-ui/react';
import {
  GitBranch02Icon,
  LinkExternal02Icon,
} from '@untitled-theme/icons-react';
import { SectionHeading } from './section-heading';

export async function Projects() {
  const { projects } = await getAuthor();

  return (
    <styled.section
      id="projects"
      py={{
        base: 24,
        lg: 32,
      }}
    >
      <SectionHeading
        index={2}
        title={<>Things I&rsquo;ve built</>}
        lg={{
          w: '1/2',
        }}
      />

      <Box
        mt={{
          base: 14,
          lg: 16,
        }}
      >
        {projects.map((o) =>
          !o.featured ? null : <Item key={o.title} data={o} />
        )}
      </Box>
    </styled.section>
  );
}

interface ItemProps {
  data: TFeaturedProject;
}

function Item(props: ItemProps) {
  const { image, title, description, website, repository, tags } = props.data;

  return (
    <Flex
      w="full"
      mt={{
        base: 12,
        _first: 0,
      }}
      flexDir={{
        base: 'column',
        lg: {
          base: 'row',
          _even: 'row-reverse',
        },
      }}
      gap={10}
      alignItems="center"
      lg={{
        mt: {
          base: 24,
        },
      }}
    >
      <Box
        w="1/2"
        border="1px solid token(colors.zinc.800)"
        flexShrink={0}
        lgDown={{
          display: 'none',
        }}
      >
        <Image
          src={image}
          alt=""
          width={450}
          height={450}
          w="full"
          h="auto"
          priority
          sizes="100vw"
          draggable={false}
        />
      </Box>

      <Box flexGrow={1}>
        <Box
          fontFamily="mono"
          fontSize="sm"
          color="emerald.500"
          lineHeight="none"
        >
          Featured Project
        </Box>

        <styled.h3
          mt={1}
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="none"
          color="zinc.200"
        >
          {title}
        </styled.h3>

        <Box
          mt={4}
          border="1px solid token(colors.zinc.800)"
          lg={{
            display: 'none',
          }}
        >
          <Image
            src={image}
            alt=""
            width={450}
            height={450}
            w="full"
            h="auto"
            priority
            draggable={false}
          />
        </Box>

        <Prose
          mt={5}
          color="zinc.300"
          lg={{
            px: 5,
            py: 4,
            bg: 'zinc.800',
          }}
        >
          {description}
        </Prose>

        <styled.ul
          mt={4}
          display="flex"
          columnGap={4}
          fontFamily="mono"
          fontSize="sm"
          flexWrap="wrap"
        >
          {tags.map((tag) => (
            <styled.li key={tag}>{tag}</styled.li>
          ))}
        </styled.ul>

        <HStack mt={8} gap={4}>
          {website && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={website}
                  target="_blank"
                  rel="noreferrer noopener"
                  prefetch={false}
                  color={{
                    base: 'zinc.300',
                    _hover: 'emerald.500',
                  }}
                  transition="colors token(durations.slow)"
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
                color={{
                  base: 'zinc.300',
                  _hover: 'emerald.500',
                }}
                transition="colors token(durations.slow)"
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
    </Flex>
  );
}
