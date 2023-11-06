import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {Plugin, unified} from 'unified';
import {matter} from 'vfile-matter';
import {z} from 'zod';

const frontmatterParserPlugin: Plugin = () => {
	return function parseFrontmatter(_, file) {
		matter(file, {
			strip: true,
		});
	};
};

const processor = unified()
	.use(remarkParse)
	.use(remarkFrontmatter)
	.use(frontmatterParserPlugin)
	.use(remarkGfm)
	.use(remarkRehype)
	.use(rehypeExternalLinks, {target: '_blank', rel: ['noopener', 'noreferrer']})
	.use(rehypeStringify);

const MetadataSchema = z.record(z.string(), z.any()).optional().default({});

export async function markdownToHtml(markdown: string) {
	const vfile = await processor.process(markdown);
	const html = vfile.toString();
	const meta = MetadataSchema.parse(vfile.data);

	return {
		html,
		meta,
	};
}
