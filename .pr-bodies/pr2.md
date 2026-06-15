Closes #10, #11

## What changed

Adds the home one-pager (Tasks 2) and Markdown blog with RSS (Task 3).

**Home (Task 2):**
- `src/data/site.ts` — single source of truth for identity and social links
- `src/data/skills.ts` — skill groups (editable without touching markup)
- `src/components/sections/Hero.astro` — name, tagline, CTAs
- `src/components/sections/About.astro` — bio
- `src/components/sections/Skills.astro` — grouped skill lists
- `src/components/sections/Contact.astro` — social/email links
- `src/pages/index.astro` updated with all sections + anchor nav
- `src/layouts/Layout.astro` updated: sticky nav with anchor links + Blog nav item

**Blog (Task 3):**
- `src/content/config.ts` — typed blog collection (Zod schema: title, description, pubDate, tags, draft…)
- `src/content/blog/hello-world.md` — sample post demonstrating frontmatter
- `src/pages/blog/index.astro` — post list newest-first, hides `draft: true`
- `src/pages/blog/[...slug].astro` — post page with prose styles, tags, dates
- `src/pages/rss.xml.ts` — RSS feed at `/rss.xml`
- Prose styles added to `global.css` for blog content

## How to test

```bash
npm ci && npm run build
npm run dev
```

- `/` → all four sections render; nav links scroll to anchors; theme toggle works across all sections
- `/blog` → sample post listed; date/tags visible
- `/blog/hello-world` → renders with prose styling in both themes
- `/rss.xml` → valid feed; sample post present
- Add a second `.md` to `src/content/blog/`, rebuild → appears with zero code changes

## Notes for owner

- All copy marked `TODO: owner copy` — especially Hero tagline/bio and Contact email
- Skills in `src/data/skills.ts`, social links in `src/data/site.ts` — edit without touching markup
