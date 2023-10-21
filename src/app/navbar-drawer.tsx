'use client';

import { AUTHOR } from '@/config/author';
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogPositioner,
  DialogTrigger,
} from '@/lib/ark-ui';
import { Button } from '@/lib/button';
import { MenuIcon, XIcon } from '@/lib/icons';
import { useDisclosure } from '@/lib/use-disclosure';
import { Flex, Spacer, styled } from '@/styled-system/jsx';
import { Portal, Presence } from '@ark-ui/react';
import { useRouter } from 'next/navigation';

export function NavbarDrawer() {
  const router = useRouter();
  const disclosure = useDisclosure();

  return (
    <Dialog
      open={disclosure.open}
      onOpenChange={(details) => {
        if (details.open) {
          disclosure.onOpen();
        } else {
          disclosure.onClose();
        }
      }}
    >
      <DialogTrigger
        color="brand.white"
        lg={{
          display: 'none',
        }}
      >
        <MenuIcon w={8} h={8} />
      </DialogTrigger>

      <Portal>
        <Presence present={disclosure.open}>
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
          <Presence present={disclosure.open}>
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
              _open={{
                animation: 'slide-in-right 250ms',
              }}
              _closed={{
                animation: 'slide-out-right 250ms',
              }}
            >
              <Flex>
                <Spacer />
                <DialogCloseTrigger color="brand.white">
                  <XIcon w={8} h={8} />
                </DialogCloseTrigger>
              </Flex>

              <styled.nav py={16}>
                <styled.ul textAlign="center">
                  {links.map(({ label, path }, index) => (
                    <styled.li
                      key={path}
                      mb={{
                        base: 6,
                        _last: 0,
                      }}
                    >
                      <styled.button
                        type="button"
                        py={1}
                        onClick={() => {
                          disclosure.onClose();
                          router.push(path);
                        }}
                      >
                        <styled.div fontFamily="mono" color="brand.accent">
                          {(++index).toString().padStart(2, '0')}.
                        </styled.div>
                        <styled.div fontSize="lg" color="brand.slate.lighter">
                          {label}
                        </styled.div>
                      </styled.button>
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
    </Dialog>
  );
}

const links = [
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
