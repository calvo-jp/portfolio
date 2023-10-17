import { Icon } from '@/lib/icon';
import { Center, HStack, VStack, styled } from '@/styled-system/jsx';
import { GitBranchIcon, StarIcon } from 'lucide-react';

export function Footer() {
  return (
    <styled.footer>
      <Center>
        <styled.a
          href="https://github.com/calvo-jp/calvo-jp"
          target="_blank"
          rel="noreferrer noopener"
          fontFamily="mono"
          fontSize="xs"
          color={{
            base: 'brand.slate.light',
            _hover: 'brand.teal',
          }}
          transition="colors"
          transitionDuration="slow"
        >
          <VStack gap={2}>
            <styled.p>Designed & Built by JP Calvo</styled.p>

            <HStack gap={4}>
              <HStack>
                <Icon asChild>
                  <StarIcon />
                </Icon>
                <styled.span>1,001</styled.span>
              </HStack>
              <HStack>
                <Icon asChild>
                  <GitBranchIcon />
                </Icon>
                <styled.span>6,205</styled.span>
              </HStack>
            </HStack>
          </VStack>
        </styled.a>
      </Center>
    </styled.footer>
  );
}
