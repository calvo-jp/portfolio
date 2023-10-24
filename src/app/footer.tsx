import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons';
import { AUTHOR } from '@/config/author';
import { Center, VisuallyHidden, styled } from '@/styled-system/jsx';

export function Footer() {
  return (
    <styled.footer pt={32} pb={8}>
      <Center
        mb={4}
        lg={{
          display: 'none',
        }}
      >
        <styled.nav>
          <styled.ul display="flex" alignItems="center" gap={5}>
            {Object.entries(AUTHOR.socials).map(([name, url]) => (
              <styled.li key={name}>
                <styled.a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  color="brand.slate.light"
                >
                  {getSocialIcon(name)}
                  <VisuallyHidden>{name}</VisuallyHidden>
                </styled.a>
              </styled.li>
            ))}
          </styled.ul>
        </styled.nav>
      </Center>

      <Center fontFamily="mono" fontSize="sm">
        &copy; {AUTHOR.name} {new Date().getFullYear()}
      </Center>
    </styled.footer>
  );
}

function getSocialIcon(name: 'github' | 'linkedin' | 'twitter' | (string & {})) {
  switch (name.toLowerCase()) {
    case 'github':
      return <GithubIcon w={5} h={5} />;
    case 'twitter':
      return <TwitterIcon w={5} h={5} />;
    case 'linkedin':
      return <LinkedinIcon w={5} h={5} />;
    default:
      throw new Error(`Unknown social: '${name}'`);
  }
}
