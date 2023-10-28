import { IconGithub, IconLinkedin, IconTwitter } from '@/components/icons';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/components/tooltip';
import { AUTHOR } from '@/config/author';
import { VisuallyHidden, styled } from '@/styled-system/jsx';
import { capitalize } from '@/utils/capitalize';
import { Portal } from '@ark-ui/react';

export function Socials() {
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
          {Object.entries(AUTHOR.socials).map(([name, url]) => (
            <styled.li key={name}>
              <Tooltip
                id={`socials:${name}`}
                positioning={{
                  placement: 'right',
                }}
              >
                <TooltipTrigger asChild>
                  <styled.a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    transitionProperty="colors"
                    transitionDuration="slow"
                    color={{
                      _hover: 'violet.400',
                    }}
                  >
                    {getIcon(name)}
                    <VisuallyHidden>{name}</VisuallyHidden>
                  </styled.a>
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
            <styled.div h="15vh" w="1px" bg="neutral.800" roundedTop="full" />
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
