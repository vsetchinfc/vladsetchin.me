# vladsetchin.me

Personal website and blog powered by [Astro](https://astro.build).

## About

This site is built with Astro (static site generation) and React islands for interactive components. Content is authored in Markdown, and the site deploys automatically to GitHub Pages on every push to the `vladsetchin.me-astro` branch.

## Tech Stack

- **Framework:** Astro 4.x (SSG)
- **Interactive components:** React 18
- **Hosting:** GitHub Pages
- **Domain:** vladsetchin.me
- **CI/CD:** GitHub Actions

## Development

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The site will be available at `http://localhost:4321/`.

### Build for production

```bash
npm run build
```

The static output will be generated in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

## Content Management

### Blog Posts (coming in Task 3)

To add a new blog post, create a Markdown file in `src/content/blog/`:

```markdown
---
title: "My Blog Post"
description: "A short description"
pubDate: 2026-06-16
---

Your content here...
```

Push to the `vladsetchin.me-astro` branch, and GitHub Actions will automatically build and deploy the site with your new post.

## Design System

The site uses CSS custom properties for design tokens. The accent colour is defined in `src/styles/global.css`:

```css
--color-accent: #6366f1; /* TODO: owner — replace with brand colour */
```

### Theme Toggle

The site supports dark (default) and light themes. User preference is stored in `localStorage` and respects `prefers-color-scheme` on first visit. The theme toggle is a React island that updates without page reload.

## Deployment

Deployment is fully automated via GitHub Actions (`.github/workflows/deploy.yml`):

1. Push to the `vladsetchin.me-astro` branch
2. GitHub Actions runs `npm ci && npm run build`
3. The `dist/` folder is deployed to GitHub Pages
4. The site is live at https://vladsetchin.me

## License

See [LICENSE](LICENSE).
