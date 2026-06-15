---
title: 'Hello World — Why I rebuilt this site with Astro'
description: 'A quick look at why I moved from VuePress to Astro for my personal site and what the new setup looks like.'
pubDate: 2026-06-16
tags: ['astro', 'blogging', 'typescript']
draft: false
---

After a few false starts with Scully and AnalogJS, I rebuilt vladsetchin.me from scratch with [Astro](https://astro.build).

## Why Astro?

The single requirement that drove everything: **adding a blog post should mean adding one Markdown file and pushing**. No local builds, no config edits, no CMS login.

Astro delivers that with its [Content Collections](https://docs.astro.build/en/guides/content-collections/) — typed, schema-validated Markdown files that compile to real HTML on every push. GitHub Actions runs the build; GitHub Pages hosts the output.

The other nice thing: React islands. The theme toggle is a React component. Future portfolio pieces can embed an Angular or Vue demo to show range — without paying React's weight on every static page.

## The stack

- **Framework:** Astro 4.x (static output)
- **Interactive bits:** React 18 (islands only)
- **Hosting:** GitHub Pages
- **Comments:** Giscus (GitHub Discussions backed)
- **CI/CD:** GitHub Actions → Pages on every push to the `vladsetchin.me-astro` branch

## What's next

The blog is live. Portfolio and services sections are coming in the next PR. If you want to follow along, the source is at [github.com/vsetchinfc/vladsetchin.me](https://github.com/vsetchinfc/vladsetchin.me).
