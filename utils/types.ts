import {
	Output,
	array,
	email,
	enum_,
	fallback,
	intersect,
	literal,
	object,
	optional,
	record,
	string,
	transform,
	union,
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

export const WorkHistorySchema = object({
	company: CompanySchema,
	position: string(),
	dateOfEmployment: EmploymentDateSchema,
	responsibilities: string(),
});

const BaseProjectSchema = object({
	title: string(),
	description: string(),
	repository: string([url()]),
	website: optional(string([url()])),
	tags: array(string()),
	createdAt: transform(string(), (value) => new Date(value)),
});

export const FeaturedProjectSchema = intersect([
	BaseProjectSchema,
	object({
		image: string(),
		featured: literal(true),
	}),
]);

export const NonFeaturedProjectSchema = intersect([
	BaseProjectSchema,
	object({
		image: optional(string()),
		featured: optional(literal(false)),
	}),
]);

export const ProjectSchema = union([
	FeaturedProjectSchema,
	NonFeaturedProjectSchema,
]);

export const PrimaryInfoSchema = object({
	name: string(),
	skills: array(string()),
	resume: string([url()]),
	socials: record(string([url()])),
	contact: ContactSchema,
	company: CompanySchema,
	about: string(),
});

export const AuthorSchema = intersect([
	PrimaryInfoSchema,
	object({
		projects: array(ProjectSchema),
		workHistory: array(WorkHistorySchema),
	}),
]);

export enum Theme {
	Dark = 'dark',
	Light = 'light',
	System = 'system',
}

export const ThemeSchema = fallback(enum_(Theme), Theme.Dark);

export type TCompany = Output<typeof CompanySchema>;
export type TContact = Output<typeof ContactSchema>;
export type TProject = Output<typeof ProjectSchema>;
export type TFeaturedProject = Output<typeof FeaturedProjectSchema>;
export type TNonFeaturedProject = Output<typeof NonFeaturedProjectSchema>;
export type TEmploymentDate = Output<typeof EmploymentDateSchema>;
export type TWorkHistory = Output<typeof WorkHistorySchema>;
export type TPrimaryInfo = Output<typeof PrimaryInfoSchema>;
export type TAuthor = Output<typeof AuthorSchema>;
