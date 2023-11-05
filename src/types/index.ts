export interface ICompany {
	name: string;
	website: string;
}

export interface IContact {
	email: string;
}

export interface IEmploymentDate {
	start: Date;
	until?: Date;
}

export interface IWorkHistory {
	company: ICompany;
	position: string;
	dateOfEmployment: IEmploymentDate;
	responsibilities: string;
}

export type TSocial =
	| 'github'
	| 'tikTok'
	| 'twitter'
	| 'linkedin'
	| 'facebook'
	| 'instagram'
	| (string & {});

export interface IProject {
	title: string;
	image?: string;
	description: string;
	repository: string;
	website?: string;
	tags: string[];
	createdAt: Date;
	featured?: boolean;
}

export interface IAuthor {
	name: string;
	about: string;
	skills: string[];
	resume: string;
	contact: IContact;
	company: ICompany;
	socials: Partial<Record<TSocial, string>>;
	workHistory: IWorkHistory[];
	projects: IProject[];
}

export enum Theme {
	Dark = 'dark',
	Light = 'light',
	System = 'system',
}
