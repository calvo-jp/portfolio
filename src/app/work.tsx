import { IconExternalLink, IconGitBranch } from '@/components/icons';
import { Image } from '@/components/image';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/components/tooltip';
import { AUTHOR } from '@/config/author';
import { Flex, HStack, VisuallyHidden, styled } from '@/styled-system/jsx';
import { IFeaturedProject } from '@/types';
import { Portal } from '@ark-ui/react';
import { SectionHeading } from './section-heading';

const projects = [...AUTHOR.projects].filter((o) => o.featured) as IFeaturedProject[];

export function Work() {
  return (
    <styled.section
      id="work"
      py={{
        base: 16,
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

      <styled.div
        mt={{
          base: 12,
          lg: 16,
        }}
      >
        {projects.map((o) => (
          <Item key={o.title} {...o} />
        ))}
      </styled.div>
    </styled.section>
  );
}

function Item(props: IFeaturedProject) {
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
      <styled.div
        w="1/2"
        flexShrink={0}
        lgDown={{
          display: 'none',
        }}
      >
        <Image src={image} alt="" width={450} height={450} w="full" h="auto" />
      </styled.div>

      <styled.div flexGrow={1}>
        <styled.div fontFamily="mono" fontSize="sm" color="violet.400" lineHeight="none">
          Featured Project
        </styled.div>

        <styled.h3
          mt={1}
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="none"
          color="neutral.200"
        >
          {title}
        </styled.h3>

        <styled.div
          mt={4}
          lg={{
            display: 'none',
          }}
        >
          <Image src={image} alt="" width={450} height={450} w="full" h="auto" />
        </styled.div>

        <styled.p
          mt={5}
          rounded="sm"
          color="neutral.300"
          hyphens="auto"
          lg={{
            px: 5,
            py: 4,
            bg: 'neutral.800',
          }}
        >
          {description}
        </styled.p>

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
                <styled.a
                  href={website}
                  target="_blank"
                  rel="noreferrer noopener"
                  color={{
                    base: 'neutral.300',
                    _hover: 'violet.400',
                  }}
                  transitionProperty="colors"
                  transitionDuration="slow"
                >
                  <IconExternalLink w={6} h={6} />
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
                color={{
                  base: 'neutral.300',
                  _hover: 'violet.400',
                }}
                transitionProperty="colors"
                transitionDuration="slow"
              >
                <IconGitBranch w={6} h={6} />
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
      </styled.div>
    </Flex>
  );
}
