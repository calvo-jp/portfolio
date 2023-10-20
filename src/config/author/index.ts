'server-only';

import {
  IAuthor,
  ICompany,
  IContact,
  ISocials,
  TExternalLink,
  TName,
  TSkill,
} from '../../types';
import { about } from './about';
import { faqs } from './faqs';
import { projects } from './projects';
import { workHistory } from './work-history';

const name: TName = 'JP Calvo';

const contact: IContact = {
  email: 'calvojp92@gmail.com',
};

const resume: TExternalLink =
  'https://docs.google.com/document/d/1F1Sy9XboZLo-fMCPfpGa35uqNyuvVeI6niXkhpYOp_c/edit?usp=share_link';

const company: ICompany = {
  name: 'ScaleForge',
  website: 'https://scaleforge.tech',
};

const socials: ISocials = {
  github: 'https://github.com/calvo-jp',
  twitter: 'https://twitter.com/calvojp92',
  linkedin: 'https://www.linkedin.com/in/calvojp92',
};

const skills: TSkill[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'NextJs'];

export const AUTHOR: IAuthor = {
  name,
  about,
  resume,
  skills,
  contact,
  company,
  socials,
  workHistory,
  projects,
  faqs,
};
