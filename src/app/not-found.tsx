import { Button } from '@/components/button';
import { IconChevronLeft } from '@/components/icons';
import { Link } from '@/components/link';
import { styled } from '@/styled-system/jsx';

export default function NotFound() {
  return (
    <styled.div px={8} pt={40} pb={32} textAlign="center">
      <styled.h1
        fontFamily="mono"
        fontSize="9xl"
        fontWeight="bold"
        lineHeight="none"
        color="purple.400"
      >
        404
      </styled.h1>
      <styled.h2 fontSize="3xl" lineHeight="none" color="neutral.300">
        Page Not Found
      </styled.h2>
      <Button asChild>
        <Link
          href="/"
          w={40}
          mt={16}
          mx="auto"
          gap={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <IconChevronLeft />
          <styled.span>Go Home</styled.span>
        </Link>
      </Button>
    </styled.div>
  );
}
