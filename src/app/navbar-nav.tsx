import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { AUTHOR } from '@/config/author';
import { VisuallyHidden, styled } from '@/styled-system/jsx';

export function NavbarNav() {
  return (
    <styled.nav
      display="flex"
      alignItems="center"
      gap={8}
      lgDown={{
        display: 'none',
      }}
    >
      <styled.ul display="flex" alignItems="center" gap={8}>
        {NAVBAR_LINKS.map(({ path, label }, index) => (
          <styled.li key={path}>
            <Link href={path} display="flex" alignItems="center" gap={1}>
              <styled.span fontFamily="mono" color="purple.400" fontSize="xs">
                {(++index).toString().padStart(2, '0')}.
              </styled.span>
              <styled.span
                fontSize="sm"
                transitionProperty="colors"
                transitionDuration="slow"
                color={{
                  base: 'neutral.200',
                  _hover: 'purple.400',
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
  );
}

export const NAVBAR_LINKS = [
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
