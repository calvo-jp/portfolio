import { Center, styled } from '@/styled-system/jsx';
import { ThemeSwitch } from './theme-switch';

export async function Footer() {
  return (
    <styled.footer pt={32} pb={8}>
      <Center>
        <ThemeSwitch />
      </Center>
    </styled.footer>
  );
}
