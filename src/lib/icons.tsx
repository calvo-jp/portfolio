import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import {
  AsteriskIcon as asterisk,
  ChevronLeftIcon as chevronLeft,
  ExternalLinkIcon as externalLink,
  FolderIcon as folder,
  GitBranchIcon as gitBranch,
  GithubIcon as github,
  LinkedinIcon as linkedin,
  MenuIcon as menu,
  TerminalIcon as terminal,
  TwitterIcon as twitter,
  XIcon as x,
} from 'lucide-react';

const recipe = cva({
  base: {
    w: 4,
    h: 4,
  },
});

export const GithubIcon = styled(github, recipe);
export const LinkedinIcon = styled(linkedin, recipe);
export const TwitterIcon = styled(twitter, recipe);
export const AsteriskIcon = styled(asterisk, recipe);
export const TerminalIcon = styled(terminal, recipe);
export const ChevronLeftIcon = styled(chevronLeft, recipe);
export const ExternalLinkIcon = styled(externalLink, recipe);
export const GitBranchIcon = styled(gitBranch, recipe);
export const FolderIcon = styled(folder, recipe);
export const MenuIcon = styled(menu, recipe);
export const XIcon = styled(x, recipe);
