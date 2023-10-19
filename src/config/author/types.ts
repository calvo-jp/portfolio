import { ReactNode } from 'react';

type Alias<T> = T & { _?: never };

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
  until: Date | null;
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

export type TProgrammingLanguageOrFramework =
  | 'HTML'
  | 'CSS'
  | 'TypeScript'
  | 'JavaScript'
  | 'Python'
  | 'NodeJs'
  | 'React'
  | 'NextJs';

export type TTag = TProgrammingLanguageOrFramework | (string & {});

export interface IProject {
  title: string;
  description: ReactNode;
  image: TExternalLink;
  website?: TExternalLink;
  repository: TExternalLink;
  tags: TTag[];
  featured?: boolean;
}

export type TSkill = TProgrammingLanguageOrFramework | (string & {});

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
  projects: IProject[];
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
