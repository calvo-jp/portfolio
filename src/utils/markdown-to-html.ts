import { cache } from 'react';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import rehypeWidont from 'rehype-widont';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { Plugin, unified } from 'unified';
import { matter } from 'vfile-matter';

const frontmatterParserPlugin: Plugin = () => {
  return function parseFrontmatter(_tree, file) {
    matter(file, {
      strip: true,
    });
  };
};

const processor = unified()
  .use(remarkParse)
  .use(remarkFrontmatter, [{ type: 'yaml', marker: '-' }])
  .use(frontmatterParserPlugin)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
  .use(rehypeWidont as Plugin)
  .use(rehypeStringify);

export const markdownToHtml = cache(async (markdown: string) => {
  const vfile = await processor.process(markdown);
  const html = vfile.toString();
  const meta = vfile.data;

  return {
    html,
    meta,
  };
});
