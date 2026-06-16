---
title: 'Hello World — Why I rebuilt this site with Astro'
description: 'A quick look at why I moved from VuePress to Astro for my personal site and what the new setup looks like.'
pubDate: 2026-06-16
tags: ['astro', 'blogging', 'typescript']
heroImage: 'images/blog/hello-world-astro.png'
thumbnail: 'images/blog/hello-world-astro-square.png'
draft: false
---

Scully didn't work out. Neither did AnalogJS — close, but the Angular dependency tax wasn't worth it for a personal site. Third time's the charm: I rebuilt vladsetchin.me from scratch with [Astro](https://astro.build).

## Why Astro?

One requirement drove the whole decision: adding a blog post should mean adding a Markdown file and pushing. That's it. No local build step, no config to touch, no CMS login screen to forget the password to.

Astro's [Content Collections](https://docs.astro.build/en/guides/content-collections/) deliver exactly that — typed, schema-validated Markdown that compiles to real HTML on every push. GitHub Actions runs the build. GitHub Pages hosts the output. Neither one needs me.

The other reason, the one I didn't expect to matter as much as it does: React islands. The theme toggle on this page is a React component, hydrated only where it's needed. A future portfolio piece could embed an Angular or Vue demo to actually show range, instead of just claiming it in a skills list — without every other page on the site paying React's weight for it.

## The stack

- **Framework:** Astro 4.x, static output
- **Interactive bits:** React 18, islands only
- **Hosting:** GitHub Pages
- **Comments:** Giscus — GitHub Discussions backed, no third-party comment widget
- **CI/CD:** GitHub Actions → Pages, on every push to `vladsetchin.me-astro`

## What's next

The blog is live. That was the bar. Portfolio and services sections land in the next PR.

Source's at [github.com/vsetchinfc/vladsetchin.me](https://github.com/vsetchinfc/vladsetchin.me), if you want to follow along or just see how a Markdown file turns into this page.
