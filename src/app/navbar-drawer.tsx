import { Button } from '@/lib/button';
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogPositioner,
  DialogTrigger,
} from '@/lib/dialog';
import { getAuthor } from '@/lib/get-author';
import { Icon } from '@/lib/icon';
import { Link } from '@/lib/link';
import { Box, Flex, VisuallyHidden, styled } from '@/styled-system/jsx';
import { Portal } from '@ark-ui/react';
import { Menu05Icon, XIcon } from '@untitled-theme/icons-react';
import { NAVBAR_NAV_ITEMS } from './navbar-nav';

export async function NavbarDrawer() {
  const author = await getAuthor();

  return (
    <Dialog>
      <DialogTrigger
        color="zinc.100"
        lg={{
          display: 'none',
        }}
      >
        <Icon w={8} h={8} asChild>
          <Menu05Icon strokeWidth="1.66667" />
        </Icon>
        <VisuallyHidden>Toggle menu</VisuallyHidden>
      </DialogTrigger>

      <Portal>
        <DialogBackdrop
          bg="bg/80"
          pos="fixed"
          inset={0}
          backdropFilter="blur(4px)"
          _open={{
            animation: 'fade-in token(durations.slow)',
          }}
          _closed={{
            animation: 'fade-out token(durations.slow)',
          }}
        />

        <DialogPositioner
          pos="fixed"
          inset={0}
          zIndex="modal"
          display="flex"
          justifyContent="flex-end"
        >
          <DialogContent
            p={{
              base: 4,
              md: 6,
            }}
            h="full"
            w={80}
            maxW="full"
            bg="zinc.800"
            pos="relative"
            overflowY="auto"
            borderLeft="1px solid token(colors.zinc.600)"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
            _open={{
              animation: 'slide-in-right token(durations.slow)',
            }}
            _closed={{
              animation: 'slide-out-right token(durations.slow)',
            }}
          >
            <Flex justifyContent="flex-end">
              <DialogCloseTrigger color="zinc.300">
                <Icon w={8} h={8} asChild>
                  <XIcon strokeWidth="1.66667" />
                </Icon>
                <VisuallyHidden>Close menu</VisuallyHidden>
              </DialogCloseTrigger>
            </Flex>

            <styled.nav pt={10} pb={16}>
              <styled.ul textAlign="center">
                {NAVBAR_NAV_ITEMS.map((item, index) => (
                  <styled.li
                    key={item.path}
                    mb={{
                      base: 6,
                      _last: 0,
                    }}
                  >
                    <DialogCloseTrigger asChild>
                      <Link py={1} href={item.path}>
                        <Box fontFamily="mono" color="emerald.500">
                          {index.toString().padStart(2, '0')}.
                        </Box>
                        <Box fontSize="lg" color="zinc.200">
                          {item.label}
                        </Box>
                      </Link>
                    </DialogCloseTrigger>
                  </styled.li>
                ))}
              </styled.ul>

              <Button w="2/3" mx="auto" mt={12} asChild>
                <Link
                  href={author.resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  prefetch={false}
                >
                  Resume
                </Link>
              </Button>
            </styled.nav>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </Dialog>
  );
}
