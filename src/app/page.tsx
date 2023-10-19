import { About } from './about';
import { Contact } from './contact';
import { Experience } from './experience';
import { Faqs } from './faqs';
import { Hero } from './hero';
import { Work } from './work';

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Faqs />
      <Contact />
    </>
  );
}
