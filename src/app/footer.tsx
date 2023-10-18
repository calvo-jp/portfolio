import { AUTHOR } from '@/config/constants';
import { Icon } from '@/lib/icon';
import { Center, HStack, VStack, styled } from '@/styled-system/jsx';
import { GitBranchIcon, StarIcon } from 'lucide-react';

const numberFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

// 📝 TODO: Github integration

export async function Footer() {
  const stars = numberFormatter.format(1001);
  const forks = numberFormatter.format(6205);

  return (
    <styled.footer py={8}>
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
          <VStack>
            <styled.p>Made with ❤︎ by {AUTHOR.name}</styled.p>

            <HStack gap={4}>
              <HStack>
                <Icon asChild>
                  <StarIcon />
                </Icon>
                <styled.span>{stars}</styled.span>
              </HStack>
              <HStack>
                <Icon asChild>
                  <GitBranchIcon />
                </Icon>
                <styled.span>{forks}</styled.span>
              </HStack>
            </HStack>
          </VStack>
        </styled.a>
      </Center>
    </styled.footer>
  );
}
