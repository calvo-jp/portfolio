import { AUTHOR } from '@/config/author';
import { Center, styled } from '@/styled-system/jsx';

export function Footer() {
  return (
    <styled.footer pt={32} pb={8}>
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
          Made with ❤︎ by {AUTHOR.name}
        </styled.a>
      </Center>
    </styled.footer>
  );
}
