import { Icon } from "@/components/icon";
import { Link } from "@/components/link";
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@/components/tooltip";
import { Box, VisuallyHidden, styled } from "@/styled-system/jsx";
import { capitalize } from "@/utils/capitalize";
import { getAuthor } from "@/utils/get-author";
import { Portal } from "@ark-ui/react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

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
          display: "none",
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
                  placement: "right",
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
                      _hover: "fg.accent",
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
            <Box h="15vh" w="1px" bg="bg.light" />
          </styled.li>
        </styled.ul>
      </styled.nav>
    </Portal>
  );
}

export function getSocialIcon(name: string) {
  switch (name) {
    case "github":
      return <GithubIcon />;
    case "twitter":
      return <TwitterIcon />;
    case "linkedin":
      return <LinkedinIcon />;
    default: {
      const error = new Error();

      error.name = "SocialIconNotSet";
      error.message = `No icon set for '${name}'`;
      Error.captureStackTrace?.(error);

      throw error;
    }
  }
}
