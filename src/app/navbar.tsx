import { Button } from '@/lib/button';
import { Link } from '@/lib/next-js';
import { Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';

export function Navbar() {
  return (
    <styled.header px={10} py={6} display="flex" alignItems="center">
      <Link href="#">
        <VisuallyHidden>Home</VisuallyHidden>
      </Link>

      <Spacer />

      <styled.nav display="flex" alignItems="center" gap={8}>
        <styled.ul display="flex" alignItems="center" gap={8}>
          {links.map(({ path, label }, index) => (
            <styled.li key={path}>
              <Link href={path} display="flex" alignItems="center" gap={1}>
                <styled.span
                  fontFamily="mono"
                  color="brand.green"
                  fontSize="xs"
                >
                  {(index + 1).toString().padStart(2, '0')}.
                </styled.span>
                <styled.span fontSize="sm" color="brand.slate.lighter">
                  {label}
                </styled.span>
              </Link>
            </styled.li>
          ))}
        </styled.ul>

        <Button size="sm" asChild>
          <a
            href="https://drive.google.com/file/d/1NHdv61o59_02jr8XGD3h5yInPy3JWsF6/view?usp=drive_link"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </Button>
      </styled.nav>
    </styled.header>
  );
}

const links = [
  {
    path: '#about',
    label: 'About',
  },
  {
    path: '#experience',
    label: 'Experience',
  },
  {
    path: '#work',
    label: 'Work',
  },
  {
    path: '#contact',
    label: 'Contact',
  },
];
