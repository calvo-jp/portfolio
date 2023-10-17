import { Button } from '@/lib/button';
import { styled } from '@/styled-system/jsx';

export function About() {
  return (
    <styled.section id="about" py={16}>
      <styled.h3 fontFamily="mono" color="brand.teal">
        Hi, my name is
      </styled.h3>
      <styled.h1 color="brand.slate.lighter">JP Calvo.</styled.h1>
      <styled.h2 color="brand.slate.light">I build things for the web.</styled.h2>
      <styled.p>
        I&rsquo;m a software engineer specializing in building &#40;and occasionally
        designing&#41; exceptional digital experiences. Currently, I&rsquo;m focused on
        building accessible, human-centered products at Upstatement.
      </styled.p>

      <Button mt={12}>Check out my course!</Button>
    </styled.section>
  );
}
