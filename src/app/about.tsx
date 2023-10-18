import { Button } from '@/lib/button';
import { styled } from '@/styled-system/jsx';

export function About() {
  return (
    <styled.section id="about" py={20}>
      <styled.h3 fontFamily="mono" color="brand.teal">
        Hi, my name is
      </styled.h3>

      <styled.h1
        mt={5}
        color="brand.slate.lighter"
        fontSize="7xl"
        fontWeight="black"
        lineHeight="none"
      >
        JP Calvo.
      </styled.h1>

      <styled.h2
        mt={4}
        color="brand.slate.light"
        fontSize="7xl"
        fontWeight="black"
        lineHeight="none"
      >
        I build things for the web.
      </styled.h2>

      <styled.p mt={4} fontSize="lg" lineHeight="normal" maxW="34rem">
        I&rsquo;m a software engineer specializing in building &#40;and occasionally
        designing&#41; exceptional digital experiences. Currently, I&rsquo;m focused on
        building accessible, human-centered products at{' '}
        <styled.a
          href="https://scaleforge.tech"
          transition="colors"
          transitionDuration="slow"
          textUnderlineOffset="0.5rem"
          _hover={{
            color: 'brand.teal',
            textDecoration: 'underline',
          }}
        >
          ScaleForge
        </styled.a>
        .
      </styled.p>

      <Button mt={14}>Check out my course!</Button>
    </styled.section>
  );
}
