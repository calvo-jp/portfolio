type Alias<T> = T & { _?: never };
type Nullable<T> = T | null;

export type TName = Alias<string>;
export type TEmail = Alias<string>;
export type TMarkdown = Alias<string>;
export type TExternalLink = Alias<string>;
export type TTag = Alias<string>;
export type TSkill = Alias<string>;

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
