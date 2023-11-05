import 'server-only';

import {IAuthor, IProject, IWorkHistory} from '@/types';
import {compareDesc} from 'date-fns';
import {readFile, readdir} from 'fs/promises';
import {join} from 'path';
import {cache} from 'react';
import {z} from 'zod';
import {markdownToHtml} from './markdown-to-html';

export const getAuthor = cache(async function getAuthor(): Promise<IAuthor> {
	const author = Object.assign({}, await getPrimaryInfo(), {
		about: await getAbout(),
		projects: await getProjects(),
		workHistory: await getWorkHistory(),
	});

	return author;
});

const MARKDOWN_DIR = join(process.cwd(), 'src/assets/markdown');

async function getPrimaryInfo() {
	const buffer = await readFile(join(MARKDOWN_DIR, 'primary-info.md'));
	const result = await markdownToHtml(buffer.toString());

	return z
		.object({
			name: z.string(),
			resume: z.string().url(),
			contact: z.object({
				email: z.string().email(),
			}),
			socials: z.record(z.string(), z.string().url()),
			skills: z.array(z.string()),
			company: z.object({
				name: z.string(),
				website: z.string().url(),
			}),
		})
		.parse(result.meta.matter);
}

async function getAbout() {
	const buffer = await readFile(join(MARKDOWN_DIR, 'about.md'));
	const result = await markdownToHtml(buffer.toString());

	return result.html;
}

async function getWorkHistory() {
	const schema = z.object({
		company: z.object({
			name: z.string(),
			website: z.string().url(),
		}),
		dateOfEmployment: z.object({
			start: z.coerce.date(),
			until: z.coerce.date().optional(),
		}),
		position: z.string(),
	}) satisfies z.ZodType<Omit<IWorkHistory, 'responsibilities'>>;

	const subdir = join(MARKDOWN_DIR, 'work-history');
	const files = await readdir(subdir);
	const items: IWorkHistory[] = [];

	for (const file of files) {
		const buffer = await readFile(join(subdir, file));
		const result = await markdownToHtml(buffer.toString());

		items.push({...schema.parse(result.meta.matter), responsibilities: result.html});
	}

	items.sort((i, j) => compareDesc(i.dateOfEmployment.start, j.dateOfEmployment.start));

	return items;
}

async function getProjects() {
	const schema = z.object({
		title: z.string(),
		image: z.string().optional(),
		repository: z.string().url(),
		website: z.string().url().optional(),
		featured: z.boolean().optional(),
		tags: z.array(z.string()),
		createdAt: z.coerce.date(),
	}) satisfies z.ZodType<Omit<IProject, 'description'>>;

	const subdir = join(MARKDOWN_DIR, 'projects');
	const files = await readdir(subdir);
	const items: IProject[] = [];

	for (const file of files) {
		const buffer = await readFile(join(subdir, file));
		const result = await markdownToHtml(buffer.toString());

		items.push({...schema.parse(result.meta.matter), description: result.html});
	}

	items.sort((i, j) => compareDesc(i.createdAt, j.createdAt));

	return items;
}
