import z from 'zod';

export const CompanySchema = z.object({
	name: z.string(),
	website: z.string().url(),
});

export const ContactSchema = z.object({
	email: z.string().email(),
});

export const EmploymentDateSchema = z.object({
	start: z.string().pipe(z.coerce.date()),
	until: z.optional(z.string().pipe(z.coerce.date())),
});

export const WorkHistorySchema = z.object({
	company: CompanySchema,
	position: z.string(),
	dateOfEmployment: EmploymentDateSchema,
	responsibilities: z.string(),
});

export const BaseProjectSchema = z.object({
	title: z.string(),
	description: z.string(),
	repository: z.string().url(),
	website: z.string().url().optional(),
	tags: z.array(z.string()),
	createdAt: z.string().pipe(z.coerce.date()),
});

export const FeaturedProjectSchema = BaseProjectSchema.extend({
	image: z.string(),
	featured: z.literal(true),
});

export const NonFeaturedProjectSchema = BaseProjectSchema.extend({
	image: z.optional(z.string()),
	featured: z.optional(z.literal(false)),
	noteworthy: z.boolean().optional().default(false),
});

export const ProjectSchema = z.union([
	FeaturedProjectSchema,
	NonFeaturedProjectSchema,
]);

export const PrimaryInfoSchema = z.object({
	name: z.string(),
	skills: z.array(z.string()),
	resume: z.string().url(),
	socials: z.record(z.string().url()),
	contact: ContactSchema,
	company: CompanySchema,
	about: z.string(),
});

export const AuthorSchema = PrimaryInfoSchema.extend({
	projects: z.array(ProjectSchema),
	workHistory: z.array(WorkHistorySchema),
});

export type TCompany = z.infer<typeof CompanySchema>;
export type TContact = z.infer<typeof ContactSchema>;
export type TProject = z.infer<typeof ProjectSchema>;
export type TFeaturedProject = z.infer<typeof FeaturedProjectSchema>;
export type TNonFeaturedProject = z.infer<typeof NonFeaturedProjectSchema>;
export type TEmploymentDate = z.infer<typeof EmploymentDateSchema>;
export type TWorkHistory = z.infer<typeof WorkHistorySchema>;
export type TPrimaryInfo = z.infer<typeof PrimaryInfoSchema>;
export type TAuthor = z.infer<typeof AuthorSchema>;
