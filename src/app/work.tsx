import { IconExternalLink, IconGitBranch } from '@/components/icons';
import { Image } from '@/components/image';
import { Link } from '@/components/link';
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
import { SectionHeading } from './section-heading';

export async function Work() {
  const author = await getAuthor();
  const projects = [...author.projects].filter((o) => o.featured);

  return (
    <styled.section
      id="work"
      py={{
        base: 24,
        lg: 32,
      }}
    >
      <SectionHeading
        index={3}
        title={<>Some things I&rsquo;ve built</>}
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
        {projects.map((o) => (
          <Item key={o.title} {...o} />
        ))}
      </Box>
    </styled.section>
  );
}

function Item(props: IProject) {
  const { image, title, description, website, repository, tags } = props;

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
        flexShrink={0}
        lgDown={{
          display: 'none',
        }}
      >
        <Image src={image ?? ''} alt="" width={450} height={450} w="full" h="auto" />
      </Box>

      <Box flexGrow={1}>
        <Box fontFamily="mono" fontSize="sm" color="violet.500" lineHeight="none">
          Featured Project
        </Box>

        <styled.h3
          mt={1}
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="none"
          color="neutral.200"
        >
          {title}
        </styled.h3>

        <Box
          mt={4}
          lg={{
            display: 'none',
          }}
        >
          <Image src={image ?? ''} alt="" width={450} height={450} w="full" h="auto" />
        </Box>

        <Box
          mt={5}
          rounded="sm"
          color="neutral.300"
          hyphens="auto"
          lg={{
            px: 5,
            py: 4,
            bg: 'neutral.800',
          }}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

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
                    base: 'neutral.300',
                    _hover: 'violet.500',
                  }}
                  transition="colors token(durations.slow)"
                >
                  <IconExternalLink w={6} h={6} />
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
                  base: 'neutral.300',
                  _hover: 'violet.500',
                }}
                transition="colors token(durations.slow)"
              >
                <IconGitBranch w={6} h={6} />
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
