import { AUTHOR } from '@/config/author';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/lib/icons';
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@/lib/tooltip';
import { VisuallyHidden, styled } from '@/styled-system/jsx';
import { Portal } from '@ark-ui/react';

export function Socials() {
  return (
    <Portal>
      <styled.nav
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
                id={`tooltip:socials:${name}`}
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
                      base: 'brand.slate.light',
                      _hover: 'brand.accent',
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
            <styled.div h="15vh" w="1px" bg="brand.slate" roundedTop="full" />
          </styled.li>
        </styled.ul>
      </styled.nav>
    </Portal>
  );
}

function getIcon(name: 'github' | 'linkedin' | 'twitter' | (string & {})) {
  switch (name.toLowerCase()) {
    case 'github':
      return <GithubIcon w={5} h={5} />;
    case 'twitter':
      return <TwitterIcon w={5} h={5} />;
    case 'linkedin':
      return <LinkedinIcon w={5} h={5} />;
    default:
      throw new Error(`Unknown social: '${name}'`);
  }
}

function capitalize(subject: string, delimiter = ' ') {
  subject = subject.trim();

  if (subject.length <= 1) return subject.toUpperCase();

  return subject
    .split(delimiter)
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(delimiter);
}
