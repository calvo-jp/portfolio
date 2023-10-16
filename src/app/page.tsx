import { About } from './about';
import { Contact } from './contact';
import { Experience } from './experience';
import { Hero } from './hero';
import { Work } from './work';

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </>
  );
}
