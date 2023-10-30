import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { VisuallyHidden, styled } from '@/styled-system/jsx';

interface NavbarNavProps {
  resumeUrl: string;
}

export async function NavbarNav({ resumeUrl }: NavbarNavProps) {
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
              <styled.span fontFamily="mono" color="violet.500" fontSize="xs">
                {(++index).toString().padStart(2, '0')}.
              </styled.span>
              <styled.span
                fontSize="sm"
                transition="colors token(durations.slow)"
                color={{
                  base: 'neutral.200',
                  _hover: 'violet.500',
                }}
              >
                {label}
              </styled.span>
            </Link>
          </styled.li>
        ))}
      </styled.ul>

      <Button size="sm" asChild>
        <Link href={resumeUrl} target="_blank" rel="noreferrer noopener" prefetch={false}>
          <VisuallyHidden>Download </VisuallyHidden>Resume
        </Link>
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
