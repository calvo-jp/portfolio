import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { VisuallyHidden, styled } from '@/styled-system/jsx';
import { getAuthor } from '@/utils/get-author';

export async function NavbarNav() {
  const author = await getAuthor();

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
        {NAVBAR_NAV_ITEMS.map((item, index) => (
          <styled.li key={item.path}>
            <Link
              href={item.path}
              display="flex"
              alignItems="center"
              gap={1}
              className="group"
            >
              <styled.span fontFamily="mono" color="fg.accent" fontSize="xs">
                {(++index).toString().padStart(2, '0')}.
              </styled.span>
              <styled.span
                fontSize="sm"
                transition="colors token(durations.slow)"
                color={{
                  base: 'fg.stronger',
                  _groupHover: 'fg.accent',
                }}
              >
                {item.label}
              </styled.span>
            </Link>
          </styled.li>
        ))}
      </styled.ul>

      <Button size="sm" asChild>
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
    path: '/#work',
    label: 'Work',
  },
  {
    path: '/#contact',
    label: 'Contact',
  },
];
