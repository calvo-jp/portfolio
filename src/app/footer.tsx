import { Link } from '@/components/link';
import { getAuthor } from '@/lib/get-author';
import { Center, VisuallyHidden, styled } from '@/styled-system/jsx';
import { getSocialIcon } from './socials';

export async function Footer() {
  const author = await getAuthor();

  return (
    <styled.footer id="footer" pt={32} pb={8}>
      <Center
        mb={4}
        lg={{
          display: 'none',
        }}
      >
        <styled.nav>
          <styled.ul display="flex" alignItems="center" gap={5}>
            {Object.entries(author.socials).map(([name, url]) => (
              <styled.li key={name}>
                <Link
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  prefetch={false}
                  color="zinc.300"
                >
                  {getSocialIcon(name)}
                  <VisuallyHidden>{name}</VisuallyHidden>
                </Link>
              </styled.li>
            ))}
          </styled.ul>
        </styled.nav>
      </Center>

      <Center fontFamily="mono" fontSize="sm">
        &copy; {author.name} {new Date().getFullYear()}
      </Center>
    </styled.footer>
  );
}
