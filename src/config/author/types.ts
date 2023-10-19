import { ReactNode } from 'react';

type Alias<T> = T & { _?: never };

export type Name = Alias<string>;
export type Email = Alias<string>;
export type ExternalLink = Alias<string>;

export interface Company {
  name: Name;
  website: ExternalLink;
}

export interface Contact {
  email: Email;
}

export interface EmploymentDate {
  start: Date;
  until: Date | null;
}

export interface WorkHistory {
  company: Company;
  position: string;
  dateOfEmployment: EmploymentDate;
  responsibilities: string[];
}

export interface Socials {
  github: ExternalLink;
  twitter: ExternalLink;
  linkedin: ExternalLink;
}

export type ProgrammingLanguageOrFramework =
  | 'HTML'
  | 'CSS'
  | 'TypeScript'
  | 'JavaScript'
  | 'Python'
  | 'NodeJs'
  | 'React'
  | 'NextJs';

export type Tag = ProgrammingLanguageOrFramework | (string & {});

export interface Project {
  title: string;
  description: string;
  image: ExternalLink;
  website?: ExternalLink;
  repository: ExternalLink;
  tags: Tag[];
  featured?: boolean;
}

export type Skill = ProgrammingLanguageOrFramework | (string & {});

export interface Author {
  name: string;
  about: ReactNode;
  skills: Skill[];
  resume: ExternalLink;
  contact: Contact;
  company: Company;
  socials: Socials;
  workHistory: WorkHistory[];
  projects: Project[];
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
