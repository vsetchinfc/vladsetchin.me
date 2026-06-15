Closes #9

## What changed

Replaced the Angular 18 SPA scaffold with a full Astro static site.

- Astro project with `@astrojs/react`; config: `site: 'https://vladsetchin.me'`, `base: '/'`
- `public/CNAME` → `vladsetchin.me`
- Design-token system in `src/styles/global.css` (dark default + light theme via `[data-theme='light']`, accent, type/spacing scale, all CSS custom properties)
- `src/layouts/Layout.astro`: skip-link, semantic header, main, footer; no-flash inline theme script in `<head>`
- `src/components/ThemeToggle.tsx`: React island; persists to localStorage; respects `prefers-color-scheme`
- `src/pages/index.astro`: placeholder home (content in PR 2)
- `.github/workflows/deploy.yml`: Astro build + GitHub Pages deploy on push to `vladsetchin.me-astro`
- Angular files removed (`angular.json`, `src/app/`, Angular deps)

## How to test

```bash
npm ci && npm run build   # must pass
npm run dev               # localhost:4321
```

Toggle theme → persists, no flash on reload. Clear localStorage → OS preference respected.

## Notes for owner

- Accent `--color-accent: #6366f1` is a placeholder — marked `TODO: owner copy` in `src/styles/global.css`
- Enable GitHub Pages in repo Settings → Pages, source: GitHub Actions, before CI deploy works
