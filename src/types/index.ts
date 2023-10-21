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
  | 'Node.js'
  | 'Python'
  | 'PHP';

export type TFramework =
  | 'React'
  | 'React Native'
  | 'Next.js'
  | 'Solid.js'
  | 'SolidStart'
  | 'Svelte'
  | 'SvelteKit'
  | 'Chakra UI'
  | 'Tailwind'
  | 'Panda'
  | 'Ark UI'
  | 'Prisma'
  | 'Ionic'
  | 'Capacitor';

export type TTag = TProgrammingLanguage | TFramework | (string & {});

export interface IFeaturedProject {
  image: TExternalLink;
  title: string;
  description: ReactNode;
  repository: TExternalLink;
  website: TExternalLink;
  tags: TTag[];
  createdAt: Date;
  featured: true;
}

export interface INonFeaturedProject {
  title: string;
  description: ReactNode;
  repository: TExternalLink;
  website?: TExternalLink;
  tags: TTag[];
  createdAt: Date;
  featured?: false;
}

export type TProject = IFeaturedProject | INonFeaturedProject;
export type TSkill = TProgrammingLanguage | TFramework | (string & {});

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
