import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {Plugin, unified} from 'unified';
import {any, fallback, optional, parse, record} from 'valibot';
import {matter} from 'vfile-matter';

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

const MetadataSchema = fallback(optional(record(any()), {}), {});

export async function markdownToHtml(markdown: string) {
	const vfile = await processor.process(markdown);
	const html = vfile.toString();
	const meta = parse(MetadataSchema, vfile.data);

	return {
		html,
		meta,
	};
}