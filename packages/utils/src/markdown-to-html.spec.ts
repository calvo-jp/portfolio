import {markdownToHtml} from './markdown-to-html';

const markdown = `
---
prop: Aa
---

# Hello

content

- One
- Two
`.trim();

const html = `
<h1>Hello</h1>
<p>content</p>
<ul>
<li>One</li>
<li>Two</li>
</ul>
`.trim();

describe('markdownToHtml', () => {
	it('should parse markdown to html', async () => {
		expect(await markdownToHtml(markdown)).toEqual({
			html,
			meta: expect.objectContaining({
				matter: {
					prop: 'Aa',
				},
			}),
		});
	});
});
