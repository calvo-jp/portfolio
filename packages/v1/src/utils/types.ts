import {z} from 'zod';

export const CompanySchema = z.object({
	name: z.string(),
	website: z.string().url(),
});

export const ContactSchema = z.object({
	email: z.string().email(),
});

export const EmploymentDateSchema = z.object({
	start: z.coerce.date(),
	until: z.coerce.date().optional(),
});

export const ProjectSchema = z.object({
	title: z.string(),
	image: z.string().url().optional(),
	description: z.string(),
	repository: z.string().url(),
	website: z.string().url().optional(),
	tags: z.array(z.string()),
	createdAt: z.coerce.date(),
	featured: z.boolean().optional().default(false),
});

export const WorkHistorySchema = z.object({
	company: CompanySchema,
	position: z.string(),
	dateOfEmployment: EmploymentDateSchema,
	responsibilities: z.string(),
});

export const PrimaryInfoSchema = z.object({
	name: z.string(),
	skills: z.array(z.string()),
	resume: z.string().url(),
	socials: z.record(z.string().toLowerCase().trim(), z.string().url()),
	contact: ContactSchema,
	company: CompanySchema,
});

export const AuthorSchema = PrimaryInfoSchema.extend({
	about: z.string(),
	projects: z.array(ProjectSchema),
	workHistory: z.array(WorkHistorySchema),
});

export const ThemeSchema = z
	.enum([
		//
		'dark',
		'light',
		'system',
	])
	.optional()
	.default('system');

export type TCompany = z.infer<typeof CompanySchema>;
export type TContact = z.infer<typeof ContactSchema>;
export type TProject = z.infer<typeof ProjectSchema>;
export type TEmploymentDate = z.infer<typeof EmploymentDateSchema>;
export type TWorkHistory = z.infer<typeof WorkHistorySchema>;
export type TPrimaryInfo = z.infer<typeof PrimaryInfoSchema>;
export type TAuthor = z.infer<typeof AuthorSchema>;
export type TTheme = z.infer<typeof ThemeSchema>;
