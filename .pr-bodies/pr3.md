Closes #12, #13, #14

## What changed

Adds Giscus comments (Task 4), portfolio (Task 5), and services section (Task 6).

**Giscus comments (Task 4):**
- `src/components/GiscusComments.tsx` — React island, theme-aware (syncs with site toggle), lazy-loaded with `client:visible`
- Added to blog post pages only (not index or home)
- `src/data/giscus.ts` — config file; owner must fill `repoId` and `categoryId` from giscus.app

**Portfolio (Task 5):**
- `src/content/config.ts` updated — typed `projects` collection (title, summary, tags, repoUrl, liveUrl, heroImage, featured)
- `src/content/projects/smule-player.md` — sample project entry
- `src/pages/projects/index.astro` — responsive card grid
- `src/pages/projects/[...slug].astro` — project detail with island seam placeholder
- Projects link added to nav

**Services (Task 6):**
- `src/data/services.ts` — offering data (editable without markup changes)
- `src/pages/services.astro` — services page with offering cards + contact CTA
- Home page updated with a short services teaser
- Services link added to nav

## How to test

```bash
npm ci && npm run build
npm run dev
```

- `/blog/hello-world` → Giscus loads below content; not on `/blog` or `/`; theme follows toggle
- `/projects` → sample project card renders in responsive grid
- `/projects/smule-player` → detail renders; island seam placeholder visible
- `/services` → offering cards + CTA render; nav link works

## Notes for owner

- Giscus: enable GitHub Discussions on the repo, create a "Blog Comments" category, get IDs from giscus.app, update `src/data/giscus.ts`
- Services copy in `src/data/services.ts` marked `TODO: owner copy`
- Portfolio: add projects as Markdown files to `src/content/projects/` — no code changes needed
