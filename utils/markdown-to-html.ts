import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {Plugin, unified} from 'unified';
import {fallback, object, parse, record, unknown} from 'valibot';
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

const metaSchema = fallback(object({matter: record(unknown())}), {matter: {}});

export async function markdownToHtml(markdown: string) {
	const file = await processor.process(markdown);
	const html = file.toString();
	const meta = parse(metaSchema, file.data);

	return {
		html,
		meta,
	};
}
