import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { getAuthor } from '@/lib/get-author';
import { VisuallyHidden, styled } from '@/styled-system/jsx';

export async function NavbarNav() {
  const author = await getAuthor();

  return (
    <styled.nav
      display="flex"
      alignItems="center"
      lgDown={{
        display: 'none',
      }}
    >
      <styled.ul display="flex" alignItems="center" gap={8}>
        {NAVBAR_NAV_ITEMS.map((item, index) => (
          <styled.li key={item.path}>
            <Link
              href={item.path}
              display="flex"
              alignItems="center"
              gap={1}
              className="group"
            >
              <styled.span fontFamily="mono" color="emerald.500" fontSize="xs">
                {index.toString().padStart(2, '0')}.
              </styled.span>
              <styled.span
                fontSize="sm"
                transition="colors token(durations.slow)"
                color={{
                  base: 'zinc.200',
                  _groupHover: 'emerald.500',
                }}
              >
                {item.label}
              </styled.span>
            </Link>
          </styled.li>
        ))}
      </styled.ul>

      <Button ml={8} mr={5} size="sm" asChild>
        <Link
          href={author.resume}
          target="_blank"
          rel="noreferrer noopener"
          prefetch={false}
        >
          <VisuallyHidden>Download </VisuallyHidden>Resume
        </Link>
      </Button>
    </styled.nav>
  );
}

export const NAVBAR_NAV_ITEMS = [
  {
    path: '/#about',
    label: 'About',
  },
  {
    path: '/#experience',
    label: 'Experience',
  },
  {
    path: '/#projects',
    label: 'Projects',
  },
  {
    path: '/#contact',
    label: 'Contact',
  },
];
