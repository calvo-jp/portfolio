import { styled } from '@/styled-system/jsx';

export function About() {
  return (
    <styled.section id="about" py={12}>
      <styled.h3>Hi, my name is</styled.h3>
      <styled.h1>JP Calvo</styled.h1>
      <styled.h2>I build things for the web.</styled.h2>
      <styled.p>
        I&rsquo;m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I&rsquo;m focused on
        building accessible, human-centered products at Upstatement.
      </styled.p>
    </styled.section>
  );
}
