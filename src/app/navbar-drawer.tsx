'use client';

import { AUTHOR } from '@/config/author';
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogPositioner,
  DialogTrigger,
  Portal,
  Presence,
} from '@/lib/ark-ui';
import { Button } from '@/lib/button';
import { MenuIcon, XIcon } from '@/lib/icons';
import { Link } from '@/lib/next-js';
import { Flex, Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { NAVBAR_LINKS } from './navbar-nav';

export function NavbarDrawer() {
  return (
    <Dialog>
      {({ isOpen, close }) => (
        <>
          <DialogTrigger
            cursor="pointer"
            color="brand.white"
            lg={{
              display: 'none',
            }}
          >
            <MenuIcon w={8} h={8} />
            <VisuallyHidden>Toggle menu</VisuallyHidden>
          </DialogTrigger>

          <Portal>
            <Presence present={isOpen} lazyMount>
              <DialogBackdrop
                bg="#0a192fbf" // change to "brand.navy/50" once supported
                pos="fixed"
                inset={0}
                zIndex="overlay"
                backdropFilter="blur(4px)"
                _open={{
                  animation: 'fade-in 250ms',
                }}
                _closed={{
                  animation: 'fade-out 250ms',
                }}
              />
            </Presence>

            <DialogPositioner>
              <Presence present={isOpen} lazyMount>
                <DialogContent
                  p={4}
                  h="full"
                  w="20rem"
                  maxW="full"
                  bg="brand.navy.light"
                  pos="fixed"
                  top={0}
                  right={0}
                  shadow="2xl"
                  zIndex="modal"
                  overflowY="auto"
                  css={{
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                  }}
                  _open={{
                    animation: 'slide-in-right 250ms',
                  }}
                  _closed={{
                    animation: 'slide-out-right 250ms',
                  }}
                >
                  <Flex>
                    <Spacer />
                    <DialogCloseTrigger cursor="pointer" color="brand.white">
                      <XIcon w={8} h={8} />
                      <VisuallyHidden>Close menu</VisuallyHidden>
                    </DialogCloseTrigger>
                  </Flex>

                  <styled.nav py={16}>
                    <styled.ul textAlign="center">
                      {NAVBAR_LINKS.map(({ label, path }, index) => (
                        <styled.li
                          key={path}
                          mb={{
                            base: 6,
                            _last: 0,
                          }}
                        >
                          <Link py={1} href={path} onClick={close}>
                            <styled.div fontFamily="mono" color="brand.accent">
                              {(++index).toString().padStart(2, '0')}.
                            </styled.div>
                            <styled.div fontSize="lg" color="brand.slate.lighter">
                              {label}
                            </styled.div>
                          </Link>
                        </styled.li>
                      ))}
                    </styled.ul>

                    <Button w="2/3" mx="auto" mt={12} asChild>
                      <styled.a
                        href={AUTHOR.resume}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Resume
                      </styled.a>
                    </Button>
                  </styled.nav>
                </DialogContent>
              </Presence>
            </DialogPositioner>
          </Portal>
        </>
      )}
    </Dialog>
  );
}
