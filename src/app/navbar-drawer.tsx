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
import { IconMenu, IconX } from '@/components/icons';
import { Link } from '@/components/link';
import { Box, Flex, Spacer, VisuallyHidden, styled } from '@/styled-system/jsx';
import { IAuthor } from '@/types';
import { Portal, Presence } from '@ark-ui/react';

interface NavbarDrawerProps {
  __author: IAuthor;
}

export function NavbarDrawer(props: NavbarDrawerProps) {
  return (
    <Dialog>
      {({ isOpen, close }) => (
        <>
          <DialogTrigger
            cursor="pointer"
            color="fg.lightest"
            lg={{
              display: 'none',
            }}
          >
            <IconMenu w={8} h={8} />
            <VisuallyHidden>Toggle menu</VisuallyHidden>
          </DialogTrigger>

          <Portal>
            <Presence present={isOpen}>
              <DialogBackdrop
                bg="#d4d4d417" /* FIXME: use bg/<opacity> once supported */
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
                  bg="bg"
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
                    <DialogCloseTrigger cursor="pointer" color="fg.light">
                      <IconX w={8} h={8} />
                      <VisuallyHidden>Close menu</VisuallyHidden>
                    </DialogCloseTrigger>
                  </Flex>

                  <styled.nav py={16}>
                    <styled.ul textAlign="center">
                      {[
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
                      ].map(({ label, path }, index) => (
                        <styled.li
                          key={path}
                          mb={{
                            base: 6,
                            _last: 0,
                          }}
                        >
                          <Link py={1} href={path} onClick={close}>
                            <Box fontFamily="mono" color="accent">
                              {(++index).toString().padStart(2, '0')}.
                            </Box>
                            <Box fontSize="lg" color="fg.lighter">
                              {label}
                            </Box>
                          </Link>
                        </styled.li>
                      ))}
                    </styled.ul>

                    <Button w="2/3" mx="auto" mt={12} asChild>
                      <Link
                        href={props.__author.resume}
                        target="_blank"
                        rel="noreferrer noopener"
                        prefetch={false}
                      >
                        Resume
                      </Link>
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
