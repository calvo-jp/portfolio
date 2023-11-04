import { Button } from '@/components/button';
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogPositioner,
  DialogTrigger,
} from '@/components/dialog';
import { IconMenu, IconX } from '@/components/icons';
import { Link } from '@/components/link';
import { Box, Center, Flex, VisuallyHidden, styled } from '@/styled-system/jsx';
import { getAuthor } from '@/utils/get-author';
import { Portal } from '@ark-ui/react';
import { NAVBAR_NAV_ITEMS } from './navbar-nav';
import { ThemeSwitch } from './theme-switch';

export async function NavbarDrawer() {
  const author = await getAuthor();

  return (
    <Dialog>
      <DialogTrigger
        color="fg.strongest"
        lg={{
          display: 'none',
        }}
      >
        <IconMenu w={8} h={8} />
        <VisuallyHidden>Toggle menu</VisuallyHidden>
      </DialogTrigger>

      <Portal>
        <DialogBackdrop
          bg="fg.alpha"
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
            bg="bg.light"
            pos="relative"
            overflowY="auto"
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
              <DialogCloseTrigger color="fg.strong">
                <IconX w={8} h={8} />
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
                        <Box fontFamily="mono" color="fg.accent">
                          {(++index).toString().padStart(2, '0')}.
                        </Box>
                        <Box fontSize="lg" color="fg.stronger">
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

              <Center mt={12}>
                <ThemeSwitch />
              </Center>
            </styled.nav>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </Dialog>
  );
}
