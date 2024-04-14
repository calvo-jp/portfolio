import { Icon } from '@/components/icon';
import { Link } from '@/components/link';
import { Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { TerminalIcon } from 'lucide-react';
import { NavbarDrawer } from './navbar-drawer';
import { NavbarNav } from './navbar-nav';

export async function Navbar() {
  return (
    <styled.header
      id="navbar"
      p={{
        base: 4,
        md: 6,
      }}
      bg="bg/75"
      pos="sticky"
      top={0}
      zIndex="sticky"
      backdropFilter="blur(8px)"
      display="flex"
      alignItems="center"
      lg={{
        px: 12,
      }}
    >
      <Link href="/">
        <Icon
          w={8}
          h={8}
          color="violet.500"
          lg={{
            w: 6,
            h: 6,
          }}
          asChild
        >
          <TerminalIcon />
        </Icon>
        <VisuallyHidden>Home</VisuallyHidden>
      </Link>
      <Spacer />
      <NavbarNav />
      <NavbarDrawer />
    </styled.header>
  );
}
