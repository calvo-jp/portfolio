import { styled } from '@/styled-system/jsx';
import {
  AsteriskIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  FolderIcon,
  GitBranchIcon,
  GithubIcon,
  LinkedinIcon,
  LucideIcon,
  MenuIcon,
  TerminalIcon,
  TwitterIcon,
  XIcon,
} from 'lucide-react';

function i(icon: LucideIcon) {
  return styled(
    icon,
    {
      base: {
        w: 4,
        h: 4,
      },
    },
    {
      defaultProps: {
        strokeWidth: '1.25px',
      },
    },
  );
}

export const IconGithub = i(GithubIcon);
export const IconLinkedin = i(LinkedinIcon);
export const IconTwitter = i(TwitterIcon);
export const IconAsterisk = i(AsteriskIcon);
export const IconTerminal = i(TerminalIcon);
export const IconChevronLeft = i(ChevronLeftIcon);
export const IconChevronRight = i(ChevronRightIcon);
export const IconExternalLink = i(ExternalLinkIcon);
export const IconGitBranch = i(GitBranchIcon);
export const IconFolder = i(FolderIcon);
export const IconMenu = i(MenuIcon);
export const IconX = i(XIcon);
