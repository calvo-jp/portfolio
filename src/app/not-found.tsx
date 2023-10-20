import { Button } from '@/lib/button';
import { Icon } from '@/lib/icon';
import { Link } from '@/lib/next-js';
import { styled } from '@/styled-system/jsx';
import { ChevronLeftIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <styled.div px={8} pt={36} pb={24} textAlign="center">
      <styled.h1
        fontFamily="mono"
        fontSize="12rem"
        fontWeight="bold"
        lineHeight="none"
        color="brand.teal"
      >
        404
      </styled.h1>
      <styled.h2 fontSize="5xl" lineHeight="none" color="brand.slate.light">
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
          <Icon asChild>
            <ChevronLeftIcon />
          </Icon>

          <styled.span>Go Home</styled.span>
        </Link>
      </Button>
    </styled.div>
  );
}
