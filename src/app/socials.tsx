import { Icon } from '@/lib/icon';
import { VisuallyHidden, styled } from '@/styled-system/jsx';
import { Portal } from '@ark-ui/react';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export function Socials() {
  return (
    <Portal>
      <styled.nav
        w="12.5vh"
        pos="fixed"
        left={0}
        bottom={0}
        display="flex"
        justifyContent="end"
      >
        <styled.ul w={5} display="flex" flexDir="column" alignItems="center" gap={6}>
          {links.map(({ icon, url, name }) => (
            <styled.li key={name}>
              <styled.a
                href={url}
                transition="colors"
                transitionDuration="slow"
                color={{
                  base: 'brand.slate.light',
                  _hover: 'brand.teal',
                }}
              >
                <Icon asChild w={5} h={5}>
                  {icon}
                </Icon>
                <VisuallyHidden>{name}</VisuallyHidden>
              </styled.a>
            </styled.li>
          ))}

          <styled.li pt={2}>
            <styled.div h="15vh" w="1px" bg="brand.slate" roundedTop="full" />
          </styled.li>
        </styled.ul>
      </styled.nav>
    </Portal>
  );
}

const links = [
  {
    url: '',
    icon: <GithubIcon />,
    name: 'GitHub',
  },
  {
    url: '',
    icon: <InstagramIcon />,
    name: 'Instagram',
  },
  {
    url: '',
    icon: <TwitterIcon />,
    name: 'Twitter',
  },
  {
    url: '',
    icon: <LinkedinIcon />,
    name: 'LinkedIn',
  },
];
