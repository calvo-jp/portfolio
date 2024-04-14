import { Icon } from '@/components/icon';
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
import { SVGProps, forwardRef } from 'react';

export async function Socials() {
  const { socials } = await getAuthor();

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
        <styled.ul
          w={5}
          display="flex"
          flexDir="column"
          alignItems="center"
          gap={6}
        >
          {Object.entries(socials).map(([name, url]) => (
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
                      _hover: 'emerald.500',
                    }}
                  >
                    <Icon asChild>{getSocialIcon(name)}</Icon>
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
            <Box h="15vh" w="1px" bg="zinc.800" />
          </styled.li>
        </styled.ul>
      </styled.nav>
    </Portal>
  );
}

export function getSocialIcon(name: string) {
  switch (name) {
    case 'github':
      return <GithubIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'linkedin':
      return <LinkedinIcon />;
    default: {
      const error = new Error();

      error.name = 'SocialIconNotSet';
      error.message = `No icon set for '${name}'`;
      Error.captureStackTrace?.(error);

      throw error;
    }
  }
}

const GithubIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </g>
      </svg>
    );
  }
);

const TwitterIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
        />
      </svg>
    );
  }
);

const LinkedinIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </g>
      </svg>
    );
  }
);

GithubIcon.displayName = 'GithubIcon';
TwitterIcon.displayName = 'TwitterIcon';
LinkedinIcon.displayName = 'LinkedinIcon';
