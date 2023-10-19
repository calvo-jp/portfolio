import { AUTHOR } from '@/config/author';
import { Button } from '@/lib/button';
import { Icon } from '@/lib/icon';
import { Link } from '@/lib/next-js';
import { Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { TerminalIcon } from 'lucide-react';

export function Navbar() {
  return (
    <styled.header
      px={12}
      py={6}
      bg="#0a192fe0" /* change to "brand.navy/75" once supported */
      pos="sticky"
      top={0}
      zIndex="sticky"
      backdropFilter="blur(8px)"
      display="flex"
      alignItems="center"
    >
      <Link href="/" color="brand.teal">
        <VisuallyHidden>Home</VisuallyHidden>
        <Icon w={6} h={6} asChild>
          <TerminalIcon />
        </Icon>
      </Link>

      <Spacer />

      <styled.nav display="flex" alignItems="center" gap={8}>
        <styled.ul display="flex" alignItems="center" gap={8}>
          {links.map(({ path, label }, index) => (
            <styled.li key={path}>
              <Link href={path} display="flex" alignItems="center" gap={1}>
                <styled.span fontFamily="mono" color="brand.teal" fontSize="xs">
                  {(++index).toString().padStart(2, '0')}.
                </styled.span>
                <styled.span
                  fontSize="sm"
                  transition="colors"
                  transitionDuration="slow"
                  color={{
                    base: 'brand.slate.lighter',
                    _hover: 'brand.teal',
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
    path: '/#faqs',
    label: 'FAQ',
  },
  {
    path: '/#contact',
    label: 'Contact',
  },
];
