'server-only';

import { about } from './about';
import { projects } from './projects';
import { Author, Company, Contact, ExternalLink, Name, Skill, Socials } from './types';
import { workHistory } from './work-history';

const name: Name = 'JP Calvo';

const contact: Contact = {
  email: 'calvojp92@gmail.com',
};

const resume: ExternalLink =
  'https://docs.google.com/document/d/1F1Sy9XboZLo-fMCPfpGa35uqNyuvVeI6niXkhpYOp_c/edit?usp=share_link';

const company: Company = {
  name: 'ScaleForge',
  website: 'https://scaleforge.tech',
};

const socials: Socials = {
  github: 'https://github.com/calvo-jp',
  twitter: 'https://twitter.com/calvojp92',
  linkedin: 'https://www.linkedin.com/in/calvojp92',
};

const skills: Skill[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'NextJs'];

export const AUTHOR: Author = {
  name,
  about,
  skills,
  resume,
  contact,
  socials,
  company,
  projects,
  workHistory,
};
