import { Link } from '@/components/link';
import { AUTHOR } from '@/config/author';
import { Box } from '@/styled-system/jsx';
import { Portal } from '@ark-ui/react';

export function EmailAd() {
  return (
    <Portal>
      <Box
        id="email-ad"
        w="12.5vh"
        pos="fixed"
        right={0}
        bottom={0}
        display="flex"
        justifyContent="start"
        lgDown={{
          display: 'none',
        }}
      >
        <Box w={5} display="flex" flexDir="column" alignItems="center" gap={6}>
          <Link
            href={`mailto:${AUTHOR.contact.email}`}
            prefetch={false}
            fontFamily="mono"
            fontSize="xs"
            writingMode="vertical-rl"
            letterSpacing="widest"
            transition="colors token(durations.slow)"
            color={{
              _hover: 'violet.500',
            }}
          >
            {AUTHOR.contact.email}
          </Link>
          <Box h="15vh" w="1px" bg="neutral.800" roundedTop="full" />
        </Box>
      </Box>
    </Portal>
  );
}
