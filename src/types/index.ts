import { ReactNode } from 'react';

type Alias<T> = T & { _?: never };
type Nullable<T> = T | null;

export type TName = Alias<string>;
export type TEmail = Alias<string>;
export type TExternalLink = Alias<string>;

export interface ICompany {
  name: TName;
  website: TExternalLink;
}

export interface IContact {
  email: TEmail;
}

export interface IEmploymentDate {
  start: Date;
  until: Nullable<Date>;
}

export interface IWorkHistory {
  company: ICompany;
  position: string;
  dateOfEmployment: IEmploymentDate;
  responsibilities: string[];
}

export interface ISocials {
  github: TExternalLink;
  twitter: TExternalLink;
  linkedin: TExternalLink;
}

export type TProgrammingLanguage =
  | 'HTML'
  | 'CSS'
  | 'TypeScript'
  | 'JavaScript'
  | 'NodeJs'
  | 'Python'
  | 'PHP';

export type TFramework =
  | 'React'
  | 'NextJs'
  | 'Svelte'
  | 'SvelteKit'
  | 'Vue'
  | 'Nuxt'
  | 'Tailwind'
  | 'ChakraUi'
  | 'PandaCss'
  | 'Prisma';

export type TTag = TProgrammingLanguage | TFramework | (string & {});

export type TProject =
  | {
      image: TExternalLink;
      title: string;
      description: ReactNode;
      repository: TExternalLink;
      website: TExternalLink;
      tags: TTag[];
      featured: true;
    }
  | {
      title: string;
      description: ReactNode;
      repository: TExternalLink;
      website?: TExternalLink;
      tags: TTag[];
      featured?: false;
    };

export type TSkill = TProgrammingLanguage | TFramework | (string & {});

export interface IFaq {
  question: string;
  answer: ReactNode;
}

export interface IAuthor {
  name: string;
  about: ReactNode;
  skills: TSkill[];
  resume: TExternalLink;
  contact: IContact;
  company: ICompany;
  socials: ISocials;
  workHistory: IWorkHistory[];
  projects: TProject[];
  faqs: IFaq[];
}

export enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
