import {
	Output,
	array,
	boolean,
	email,
	enum_,
	intersect,
	object,
	optional,
	record,
	string,
	transform,
	url,
} from 'valibot';

export const CompanySchema = object({
	name: string(),
	website: string([url()]),
});

export const ContactSchema = object({
	email: string([email()]),
});

export const EmploymentDateSchema = object({
	start: transform(string(), (value) => new Date(value)),
	until: optional(transform(string(), (value) => new Date(value))),
});

export const ProjectSchema = object({
	title: string(),
	image: optional(string([url()])),
	description: string(),
	repository: string([url()]),
	website: optional(string([url()])),
	tags: array(string()),
	createdAt: transform(string(), (value) => new Date(value)),
	featured: optional(boolean()),
});

export const WorkHistorySchema = object({
	company: CompanySchema,
	position: string(),
	dateOfEmployment: EmploymentDateSchema,
	responsibilities: string(),
});

export const PrimaryInfoSchema = object({
	name: string(),
	skills: array(string()),
	resume: string([url()]),
	socials: record(string([url()])),
	contact: ContactSchema,
	company: CompanySchema,
});

export const AuthorSchema = intersect([
	PrimaryInfoSchema,
	object({
		about: string(),
		projects: array(ProjectSchema),
		workHistory: array(WorkHistorySchema),
	}),
]);

export enum Theme {
	Dark = 'dark',
	Light = 'light',
	System = 'system',
}

export const ThemeSchema = optional(enum_(Theme), Theme.System);

export type TCompany = Output<typeof CompanySchema>;
export type TContact = Output<typeof ContactSchema>;
export type TProject = Output<typeof ProjectSchema>;
export type TEmploymentDate = Output<typeof EmploymentDateSchema>;
export type TWorkHistory = Output<typeof WorkHistorySchema>;
export type TPrimaryInfo = Output<typeof PrimaryInfoSchema>;
export type TAuthor = Output<typeof AuthorSchema>;
