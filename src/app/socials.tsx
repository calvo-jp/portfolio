import { IconGithub, IconLinkedin, IconTwitter } from '@/components/icons';
import { Link } from '@/components/link';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/components/tooltip';
import { Box, VisuallyHidden, styled } from '@/styled-system/jsx';
import { capitalize } from '@/utils/capitalize';
import { getAuthor } from '@/utils/get-author';
import { Portal } from '@ark-ui/react';

export async function Socials() {
  const author = await getAuthor();

  return (
    <Portal>
      <styled.nav
        id="socials"
        w="12.5vh"
        pos="fixed"
        left={0}
        bottom={0}
        display="flex"
        justifyContent="end"
        lgDown={{
          display: 'none',
        }}
      >
        <styled.ul w={5} display="flex" flexDir="column" alignItems="center" gap={6}>
          {Object.entries(author.socials).map(([name, url]) => (
            <styled.li key={name}>
              <Tooltip
                id={`socials:${name}`}
                positioning={{
                  placement: 'right',
                }}
              >
                <TooltipTrigger asChild>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    prefetch={false}
                    transition="colors token(durations.slow)"
                    color={{
                      _hover: 'accent',
                    }}
                  >
                    {getIcon(name)}
                    <VisuallyHidden>{name}</VisuallyHidden>
                  </Link>
                </TooltipTrigger>

                <Portal>
                  <TooltipPositioner>
                    <TooltipContent>
                      <TooltipArrow>
                        <TooltipArrowTip />
                      </TooltipArrow>
                      <styled.span>{capitalize(name)}</styled.span>
                    </TooltipContent>
                  </TooltipPositioner>
                </Portal>
              </Tooltip>
            </styled.li>
          ))}

          <styled.li pt={2}>
            <Box h="15vh" w="1px" bg="bg.light" roundedTop="full" />
          </styled.li>
        </styled.ul>
      </styled.nav>
    </Portal>
  );
}

function getIcon(name: 'github' | 'linkedin' | 'twitter' | (string & {})) {
  switch (name.toLowerCase()) {
    case 'github':
      return <IconGithub />;
    case 'twitter':
      return <IconTwitter />;
    case 'linkedin':
      return <IconLinkedin />;
    default:
      throw new Error(`Unknown social: '${name}'`);
  }
}
