import { AUTHOR } from '@/config/author';
import { Center, styled } from '@/styled-system/jsx';

export function Footer() {
  return (
    <styled.footer pt={32} pb={8}>
      <Center fontFamily="mono" fontSize="sm">
        &copy; {AUTHOR.name} {new Date().getFullYear()}
      </Center>
    </styled.footer>
  );
}
