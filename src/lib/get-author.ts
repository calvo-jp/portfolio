import {compareDesc} from 'date-fns';
import {unstable_cache as cache} from 'next/cache';
import {readFile, readdir} from 'node:fs/promises';
import {join} from 'node:path';
import {markdownToHtml} from './markdown-to-html';
import {
	PrimaryInfoSchema,
	ProjectSchema,
	WorkHistorySchema,
	type TAuthor,
	type TProject,
	type TWorkHistory,
} from './types';

export const getAuthor = cache(
	async (): Promise<TAuthor> => {
		const projects = await getProjects();
		const workHistory = await getWorkHistory();
		const primaryInfo = await getPrimaryInfo();

		return {...primaryInfo, projects, workHistory};
	},
	['author'],
	{
		tags: ['author'],
	},
);

const MARKDOWN_DIR = join(process.cwd(), 'src/assets/markdown');

async function getPrimaryInfo() {
	const buffer = await readFile(join(MARKDOWN_DIR, 'about.md'));
	const result = await markdownToHtml(buffer.toString());

	return PrimaryInfoSchema.parse({
		...result.meta.matter,
		about: result.html,
	});
}

async function getWorkHistory() {
	const subdir = join(MARKDOWN_DIR, 'work-history');
	const files = await readdir(subdir);
	const items: TWorkHistory[] = [];

	for (const file of files) {
		const buffer = await readFile(join(subdir, file));
		const result = await markdownToHtml(buffer.toString());

		const history = WorkHistorySchema.parse({
			...result.meta.matter,
			responsibilities: result.html,
		});

		items.push(history);
	}

	items.sort((i, j) =>
		compareDesc(i.dateOfEmployment.start, j.dateOfEmployment.start),
	);
	return items;
}

async function getProjects() {
	const subdir = join(MARKDOWN_DIR, 'projects');
	const files = await readdir(subdir);
	const items: TProject[] = [];

	for (const file of files) {
		const buffer = await readFile(join(subdir, file));
		const result = await markdownToHtml(buffer.toString());

		const project = ProjectSchema.parse({
			...result.meta.matter,
			description: result.html,
		});

		items.push(project);
	}

	items.sort((i, j) => compareDesc(i.createdAt, j.createdAt));
	return items;
}
