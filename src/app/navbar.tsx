import { AUTHOR } from '@/config/author';
import { Button } from '@/lib/button';
import { TerminalIcon } from '@/lib/icons';
import { Link } from '@/lib/next-js';
import { Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { NavbarDrawer } from './navbar-drawer';

export function Navbar() {
  return (
    <styled.header
      p={4}
      bg="#0a192fe0" /* change to "brand.navy/75" once supported */
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
      <styled.nav
        display="flex"
        alignItems="center"
        gap={8}
        lgDown={{
          display: 'none',
        }}
      >
        <styled.ul display="flex" alignItems="center" gap={8}>
          {links.map(({ path, label }, index) => (
            <styled.li key={path}>
              <Link href={path} display="flex" alignItems="center" gap={1}>
                <styled.span fontFamily="mono" color="brand.accent" fontSize="xs">
                  {(++index).toString().padStart(2, '0')}.
                </styled.span>
                <styled.span
                  fontSize="sm"
                  transitionProperty="colors"
                  transitionDuration="slow"
                  color={{
                    base: 'brand.slate.lighter',
                    _hover: 'brand.accent',
                  }}
                >
                  {label}
                </styled.span>
              </Link>
            </styled.li>
          ))}
        </styled.ul>

        <Button size="sm" asChild>
          <styled.a href={AUTHOR.resume} target="_blank" rel="noreferrer noopener">
            <VisuallyHidden>Download </VisuallyHidden>Resume
          </styled.a>
        </Button>
      </styled.nav>

      <NavbarDrawer />
    </styled.header>
  );
}

const links = [
  {
    path: '/#about',
    label: 'About',
  },
  {
    path: '/#experience',
    label: 'Experience',
  },
  {
    path: '/#work',
    label: 'Work',
  },
  {
    path: '/#contact',
    label: 'Contact',
  },
];
