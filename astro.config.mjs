import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogContentDir = path.join(__dirname, 'src/content/blog');

/**
 * Slugs of blog posts marked `unlisted: true` in frontmatter.
 * @astrojs/sitemap has no content-collection awareness, so unlisted posts
 * are excluded from sitemap.xml via the `filter` option below, matched by
 * their generated `/blog/<slug>/` URL.
 */
function getUnlistedBlogSlugs() {
	if (!fs.existsSync(blogContentDir)) return new Set();

	const slugs = new Set();
	for (const file of fs.readdirSync(blogContentDir)) {
		if (!/\.mdx?$/.test(file)) continue;

		const raw = fs.readFileSync(path.join(blogContentDir, file), 'utf-8');
		const frontmatterMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
		if (!frontmatterMatch) continue;

		const isUnlisted = frontmatterMatch[1]
			.split(/\r?\n/)
			.some((line) => /^unlisted:\s*true\s*$/.test(line.trim()));
		if (isUnlisted) {
			slugs.add(file.replace(/\.mdx?$/, ''));
		}
	}
	return slugs;
}

const unlistedBlogSlugs = getUnlistedBlogSlugs();

// https://astro.build/config
export default defineConfig({
	site: 'https://vladsetchin.me',
	base: '/',
	integrations: [
		react(),
		sitemap({
			filter: (page) =>
				![...unlistedBlogSlugs].some((slug) =>
					page.includes(`/blog/${slug}/`),
				),
		}),
	],
	output: 'static',
});
