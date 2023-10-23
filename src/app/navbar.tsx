import { TerminalIcon } from '@/components/icons';
import { Link } from '@/components/link';
import { Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { NavbarDrawer } from './navbar-drawer';
import { NavbarNav } from './navbar-nav';

export function Navbar() {
  return (
    <styled.header
      p={4}
      bg="#0a192fe0" /* FIXME: change to "brand.navy/75" once supported */
      pos="sticky"
      top={0}
      zIndex="sticky"
      backdropFilter="blur(8px)"
      display="flex"
      alignItems="center"
      lg={{
        px: 12,
        py: 6,
      }}
    >
      <Link href="/">
        <TerminalIcon
          w={8}
          h={8}
          color="brand.accent"
          lg={{
            w: 6,
            h: 6,
          }}
        />
        <VisuallyHidden>Home</VisuallyHidden>
      </Link>

      <Spacer />
      <NavbarNav />
      <NavbarDrawer />
    </styled.header>
  );
}
