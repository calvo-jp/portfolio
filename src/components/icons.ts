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

function styledIcon(icon: LucideIcon) {
  return styled(
    icon,
    {
      base: {
        w: 5,
        h: 5,
      },
    },
    {
      defaultProps: {
        strokeWidth: 1.66667,
      },
      shouldForwardProp(key) {
        return key === 'strokeWidth';
      },
    },
  );
}

export const IconGithub = styledIcon(GithubIcon);
export const IconLinkedin = styledIcon(LinkedinIcon);
export const IconTwitter = styledIcon(TwitterIcon);
export const IconAsterisk = styledIcon(AsteriskIcon);
export const IconTerminal = styledIcon(TerminalIcon);
export const IconChevronLeft = styledIcon(ChevronLeftIcon);
export const IconChevronRight = styledIcon(ChevronRightIcon);
export const IconExternalLink = styledIcon(ExternalLinkIcon);
export const IconGitBranch = styledIcon(GitBranchIcon);
export const IconFolder = styledIcon(FolderIcon);
export const IconMenu = styledIcon(MenuIcon);
export const IconX = styledIcon(XIcon);
