import * as v from "valibot";

export const CompanySchema = v.object({
  name: v.string(),
  website: v.string([v.url()]),
});

export const ContactSchema = v.object({
  email: v.string([v.email()]),
});

export const EmploymentDateSchema = v.object({
  start: v.transform(v.string(), (value) => new Date(value)),
  until: v.optional(v.transform(v.string(), (value) => new Date(value))),
});

export const WorkHistorySchema = v.object({
  company: CompanySchema,
  position: v.string(),
  dateOfEmployment: EmploymentDateSchema,
  responsibilities: v.string(),
});

export const BaseProjectSchema = v.object({
  title: v.string(),
  description: v.string(),
  repository: v.string([v.url()]),
  website: v.optional(v.string([v.url()])),
  tags: v.array(v.string()),
  createdAt: v.transform(v.string(), (value) => new Date(value)),
});

export const FeaturedProjectSchema = v.intersect([
  BaseProjectSchema,
  v.object({
    image: v.string(),
    featured: v.literal(true),
  }),
]);

export const NonFeaturedProjectSchema = v.intersect([
  BaseProjectSchema,
  v.object({
    image: v.optional(v.string()),
    featured: v.optional(v.literal(false)),
    noteworthy: v.optional(v.boolean(), false),
  }),
]);

export const ProjectSchema = v.union([
  FeaturedProjectSchema,
  NonFeaturedProjectSchema,
]);

export const PrimaryInfoSchema = v.object({
  name: v.string(),
  skills: v.array(v.string()),
  resume: v.string([v.url()]),
  socials: v.record(v.string([v.url()])),
  contact: ContactSchema,
  company: CompanySchema,
  about: v.string(),
});

export const AuthorSchema = v.intersect([
  PrimaryInfoSchema,
  v.object({
    projects: v.array(ProjectSchema),
    workHistory: v.array(WorkHistorySchema),
  }),
]);

export type TCompany = v.Output<typeof CompanySchema>;
export type TContact = v.Output<typeof ContactSchema>;
export type TProject = v.Output<typeof ProjectSchema>;
export type TFeaturedProject = v.Output<typeof FeaturedProjectSchema>;
export type TNonFeaturedProject = v.Output<typeof NonFeaturedProjectSchema>;
export type TEmploymentDate = v.Output<typeof EmploymentDateSchema>;
export type TWorkHistory = v.Output<typeof WorkHistorySchema>;
export type TPrimaryInfo = v.Output<typeof PrimaryInfoSchema>;
export type TAuthor = v.Output<typeof AuthorSchema>;
