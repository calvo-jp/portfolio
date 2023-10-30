import { IconTerminal } from '@/components/icons';
import { Link } from '@/components/link';
import { Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { getAuthor } from '@/utils/get-author';
import { NavbarDrawer } from './navbar-drawer';
import { NavbarNav } from './navbar-nav';

export async function Navbar() {
  return (
    <styled.header
      p={4}
      bg="#171717db" /* FIXME: use neutral.800/<opacity> once supported */
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
        <IconTerminal
          w={8}
          h={8}
          color="violet.500"
          lg={{
            w: 6,
            h: 6,
          }}
        />
        <VisuallyHidden>Home</VisuallyHidden>
      </Link>
      <Spacer />
      <NavbarNav />
      <NavbarDrawer __author={await getAuthor()} />
    </styled.header>
  );
}
