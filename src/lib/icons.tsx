import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import {
  AsteriskIcon as asterisk,
  ChevronLeftIcon as chevronLeft,
  ExternalLinkIcon as externalLink,
  GitBranchIcon as gitBranch,
  GithubIcon as github,
  LinkedinIcon as linkedin,
  TerminalIcon as terminal,
  TwitterIcon as twitter,
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
