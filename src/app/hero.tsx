import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { styled } from '@/styled-system/jsx';
import { getAuthor } from '@/utils/get-author';

export async function Hero() {
  const author = await getAuthor();

  return (
    <styled.section id="hero" py={20}>
      <styled.h3 fontFamily="mono" color="violet.500">
        Hi, my name is
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
        mt={{
          base: 3,
          lg: 4,
        }}
        color="neutral.300"
        fontSize={{
          base: '4xl',
          lg: '7xl',
        }}
        fontWeight="black"
        lineHeight="none"
      >
        I build things for the&nbsp;web.
      </styled.h2>

      <styled.p mt={4} fontSize="lg" lineHeight="normal" maxW="34rem">
        I&rsquo;m a software engineer specializing in building &#40;and occasionally
        designing&#41; exceptional digital experiences. Currently, I&rsquo;m focused on
        building accessible, human-centered products at{' '}
        <Link
          href={author.company.website}
          target="_blank"
          rel="noreferrer noopener"
          prefetch={false}
          color="violet.500"
          textUnderlineOffset="0.35rem"
          _hover={{
            textDecoration: 'underline',
          }}
        >
          {author.company.name}
        </Link>
        .
      </styled.p>

      <Button
        mt={{
          base: 8,
          lg: 14,
        }}
        lgDown={{
          w: 'full',
          justifyContent: 'center',
        }}
      >
        Check out my course!
      </Button>
    </styled.section>
  );
}
