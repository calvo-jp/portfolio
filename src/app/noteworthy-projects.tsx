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
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  VisuallyHidden,
  styled,
} from '@/styled-system/jsx';
import { IProject } from '@/types';
import { getAuthor } from '@/utils/get-author';
import { Portal } from '@ark-ui/react';

export async function NoteworthyProjects() {
  const author = await getAuthor();
  const items = author.projects.filter((o) => !o.featured);

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
        columns={{
          base: 1,
          lg: 2,
          xl: 3,
        }}
      >
        {items.map((o) => (
          <GridItem key={o.title}>
            <Item data={o} />
          </GridItem>
        ))}
      </Grid>
    </styled.section>
  );
}

interface ItemProps {
  data: IProject;
}

function Item(props: ItemProps) {
  const { title, description, repository, website, tags } = props.data;

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

      <Box
        mt={2}
        fontSize="sm"
        color="neutral.300"
        flexGrow={1}
        hyphens="auto"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />

      <styled.ul mt={6} display="flex" gap={3} fontFamily="mono" fontSize="xs">
        {tags.map((tag) => (
          <styled.li key={tag}>{tag}</styled.li>
        ))}
      </styled.ul>
    </Flex>
  );
}
