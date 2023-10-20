import { Button } from '@/lib/button';
import { ChevronLeftIcon } from '@/lib/icons';
import { Link } from '@/lib/next-js';
import { styled } from '@/styled-system/jsx';

export default function NotFound() {
  return (
    <styled.div px={8} pt={40} pb={32} textAlign="center">
      <styled.h1
        fontFamily="mono"
        fontSize="9xl"
        fontWeight="bold"
        lineHeight="none"
        color="brand.accent"
      >
        404
      </styled.h1>
      <styled.h2 fontSize="3xl" lineHeight="none" color="brand.slate.light">
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
          <ChevronLeftIcon />
          <styled.span>Go Home</styled.span>
        </Link>
      </Button>
    </styled.div>
  );
}
