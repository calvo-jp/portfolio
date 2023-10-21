'use client';

import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogPositioner,
  DialogTrigger,
} from '@/lib/ark-ui';
import { MenuIcon, XIcon } from '@/lib/icons';
import { useDisclosure } from '@/lib/use-disclosure';
import { Flex, Spacer } from '@/styled-system/jsx';
import { Portal, Presence } from '@ark-ui/react';

export function NavbarDrawer() {
  const disclosure = useDisclosure();

  return (
    <Dialog
      open={disclosure.open}
      onOpenChange={({ open }) => {
        if (open) {
          disclosure.onOpen();
        } else {
          disclosure.onClose();
        }
      }}
    >
      <DialogTrigger color="brand.white">
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
                animation: 'slideInLeft 200ms',
              }}
              _closed={{
                animation: 'slideOutLeft 200ms',
              }}
            >
              <Flex>
                <Spacer />
                <DialogCloseTrigger color="brand.white">
                  <XIcon w={8} h={8} />
                </DialogCloseTrigger>
              </Flex>
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
