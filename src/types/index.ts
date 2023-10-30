type Alias<T> = T & { _?: never };
type Nullable<T> = T | null;

export type TName = Alias<string>;
export type TEmail = Alias<string>;
export type TMarkdown = Alias<string>;
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
  until?: Date;
}

export interface IWorkHistory {
  company: ICompany;
  position: string;
  dateOfEmployment: IEmploymentDate;
  responsibilities: TMarkdown;
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

export interface IProject {
  title: string;
  image?: TExternalLink;
  description: TMarkdown;
  repository: TExternalLink;
  website?: TExternalLink;
  tags: TTag[];
  createdAt: Date;
  featured?: boolean;
}

export type TSkill = TProgrammingLanguage | TFramework | (string & {});

export interface IAuthor {
  name: string;
  about: TMarkdown;
  skills: TSkill[];
  resume: TExternalLink;
  contact: IContact;
  company: ICompany;
  socials: ISocials;
  workHistory: IWorkHistory[];
  projects: IProject[];
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
