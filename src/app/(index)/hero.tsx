import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { styled } from '@/styled-system/jsx';
import { getAuthor } from '@/utils/get-author';

export async function Hero() {
  const author = await getAuthor();

  return (
    <styled.section
      id="hero"
      pt={24}
      pb={10}
      lg={{
        pt: 32,
        pb: 20,
      }}
    >
      <styled.h3 fontFamily="mono" color="emerald.500">
        Hi, I&rsquo;m
      </styled.h3>

      <styled.h1
        mt={5}
        color="white"
        fontSize={{
          base: '5xl',
          lg: '7xl',
        }}
        fontWeight="black"
        lineHeight="none"
      >
        {author.name}.
      </styled.h1>

      <styled.h2
        mt={2}
        color="zinc.300"
        fontSize={{
          base: '4xl',
          lg: '6xl',
        }}
        fontWeight="extrabold"
        lineHeight="none"
      >
        I build things for the&nbsp;web.
      </styled.h2>

      <styled.p mt={5} fontSize="lg" lineHeight="normal" maxW="40rem">
        I&rsquo;m a software engineer dedicated to user-centric solutions that
        balance exceptional experiences with long-term maintainability
      </styled.p>

      <Button
        w="fit"
        mt={{
          base: 8,
          lg: 12,
        }}
        lgDown={{
          w: 'full',
          justifyContent: 'center',
        }}
        asChild
      >
        <Link href="/#projects">Checkout my work</Link>
      </Button>
    </styled.section>
  );
}
