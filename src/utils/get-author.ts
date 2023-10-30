import 'server-only';

import { IAuthor, IProject, IWorkHistory } from '@/types';
import fs from 'fs/promises';
import path from 'path';
import { cache } from 'react';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
// import remarkParseFrontmatter from 'remark-parse-frontmatter';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { matter } from 'vfile-matter';
import { z } from 'zod';

export const getAuthor = cache(async (): Promise<IAuthor> => {
  const about = await getAbout();
  const projects = await getProjects();
  const workHistory = await getWorkHistory();

  return {
    name: 'JP Calvo',
    resume:
      'https://docs.google.com/document/d/1F1Sy9XboZLo-fMCPfpGa35uqNyuvVeI6niXkhpYOp_c/edit?usp=share_link',
    contact: {
      email: 'calvojp92@gmail.com',
    },
    socials: {
      github: 'https://github.com/calvo-jp',
      twitter: 'https://twitter.com/calvojp92',
      linkedin: 'https://www.linkedin.com/in/calvojp92',
    },
    skills: [
      //
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
    ],
    company: {
      name: 'ScaleForge',
      website: 'https://scaleforge.tech',
    },
    about,
    projects,
    workHistory,
  };
});

const md = unified()
  .use(remarkParse)
  .use(remarkFrontmatter, [{ type: 'yaml', marker: '-' }])
  .use(function () {
    return function (_tree, file) {
      matter(file, {
        strip: true,
      });
    };
  })
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify);

const dir = path.join(process.cwd(), 'src/assets/markdown');

export async function getAbout() {
  return (await md.process(await fs.readFile(path.join(dir, 'about.md')))).toString();
}

export async function getWorkHistory() {
  const metadataSchema = z.object({
    company: z.object({
      name: z.string(),
      website: z.string().url(),
    }),
    dateOfEmployment: z.object({
      start: z.string().pipe(z.coerce.date()),
      until: z.string().optional().pipe(z.coerce.date().optional()),
    }),
    position: z.string(),
  });

  const subdir = path.join(dir, 'work-history');
  const files = await fs.readdir(subdir);
  const items: IWorkHistory[] = [];

  for (const file of files) {
    const vfile = await md.process(await fs.readFile(path.join(subdir, file)));
    const metadata = metadataSchema.parse(vfile.data.matter);
    const responsibilities = vfile.toString();

    items.push({ ...metadata, responsibilities });
  }

  return items;
}

export async function getProjects() {
  const metadataSchema = z.object({
    title: z.string(),
    image: z.string().optional(),
    repository: z.string().url(),
    website: z.string().url().optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()),
    createdAt: z.string().pipe(z.coerce.date()),
  });

  const subdir = path.join(dir, 'projects');
  const files = await fs.readdir(subdir);
  const items: IProject[] = [];

  for (const file of files) {
    const vfile = await md.process(await fs.readFile(path.join(subdir, file)));
    const metadata = metadataSchema.parse(vfile.data.matter);
    const description = vfile.toString();

    items.push({ ...metadata, description });
  }

  return items;
}
