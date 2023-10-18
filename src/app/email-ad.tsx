import { AUTHOR } from '@/config/constants';
import { styled } from '@/styled-system/jsx';
import { Portal } from '@ark-ui/react';

export function EmailAd() {
  return (
    <Portal>
      <styled.div
        w="12.5vh"
        pos="fixed"
        right={0}
        bottom={0}
        display="flex"
        justifyContent="start"
      >
        <styled.div w={5} display="flex" flexDir="column" alignItems="center" gap={6}>
          <styled.a
            href={`mailto:${AUTHOR.contact.email}`}
            fontFamily="mono"
            fontSize="xs"
            writingMode="vertical-rl"
            letterSpacing="widest"
            transition="colors"
            transitionDuration="slow"
            color={{
              base: 'brand.slate.light',
              _hover: 'brand.teal',
            }}
          >
            {AUTHOR.contact.email}
          </styled.a>
          <styled.div h="15vh" w="1px" bg="brand.slate" roundedTop="full" />
        </styled.div>
      </styled.div>
    </Portal>
  );
}
