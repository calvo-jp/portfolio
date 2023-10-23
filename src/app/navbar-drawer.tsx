'use client';

import { Button } from '@/components/button';
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogPositioner,
  DialogTrigger,
} from '@/components/dialog';
import { MenuIcon, XIcon } from '@/components/icons';
import { Link } from '@/components/link';
import { AUTHOR } from '@/config/author';
import { Flex, Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { Portal, Presence } from '@ark-ui/react';
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
            <Presence present={isOpen}>
              <DialogBackdrop
                bg="#0a192fbf" // FIXME: change to "brand.navy/50" once supported
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
            </Presence>

            <DialogPositioner
              pos="fixed"
              inset={0}
              zIndex="modal"
              display="flex"
              justifyContent="flex-end"
            >
              <Presence present={isOpen}>
                <DialogContent
                  p={4}
                  h="full"
                  w={80}
                  maxW="full"
                  bg="brand.navy.light"
                  shadow="2xl"
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
