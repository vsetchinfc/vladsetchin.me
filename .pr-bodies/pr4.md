Closes #15

## What changed

Adds cross-cutting SEO layer (Task 7): meta/OG tags, sitemap, robots.txt, favicons, 404 page, JSON-LD.

- `src/components/SEOHead.astro` — reusable head component: title, meta description, canonical, OG, Twitter card; defaults from `src/data/site.ts`
- `src/layouts/Layout.astro` updated to use SEOHead
- `@astrojs/sitemap` added; `astro.config.mjs` updated; sitemap at `/sitemap-index.xml` at build
- `public/robots.txt` → references sitemap
- `public/site.webmanifest` + favicon references in Layout
- `src/pages/404.astro` — styled 404 page matching design system
- JSON-LD `Person` on home, `BlogPosting` on blog posts

## How to test

```bash
npm ci && npm run build
```

- Inspect `dist/index.html` → correct `<title>`, meta description, OG/Twitter tags, canonical
- Inspect `dist/blog/hello-world/index.html` → unique title, post-specific OG, JSON-LD `BlogPosting`
- `dist/sitemap-index.xml` exists and lists pages
- `dist/robots.txt` exists and references sitemap
- Navigate to a non-existent path → styled 404 renders

## Notes for owner

- OG image: default is none; add `heroImage` to a blog post frontmatter for per-post OG
- Run `npm run build` locally and validate JSON-LD at schema.org/validator if needed
