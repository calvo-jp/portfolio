import { Icon } from '@/lib/icon';
import { HStack, styled } from '@/styled-system/jsx';
import { GitBranchIcon, StarIcon } from 'lucide-react';

export function Footer() {
  return (
    <styled.footer>
      <styled.a
        href="https://github.com/calvo-jp/calvo-jp"
        target="_blank"
        rel="noreferrer noopener"
        w="fit"
        mx="auto"
        fontFamily="mono"
        fontSize="xs"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
        color={{
          base: 'brand.slate.light',
          _hover: 'brand.teal',
        }}
        transition="colors"
        transitionDuration="slow"
      >
        <styled.div>Designed & Built by John Paul Calvo</styled.div>
        <HStack gap={4}>
          <HStack>
            <Icon w={4} h={4} asChild>
              <StarIcon />
            </Icon>
            <styled.span>1,001</styled.span>
          </HStack>
          <HStack>
            <Icon w={4} h={4} asChild>
              <GitBranchIcon />
            </Icon>
            <styled.span>6,205</styled.span>
          </HStack>
        </HStack>
      </styled.a>
    </styled.footer>
  );
}
