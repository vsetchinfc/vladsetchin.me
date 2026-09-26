---
title: 'Lyric Sheet Studio'
summary: 'A single-file browser tool that turns pasted song lyrics into a clean, auto-sized lyric sheet image, sized for iPad or print.'
date: 2026-09-26
tags: ['JavaScript', 'CSS', 'html2canvas']
liveUrl: 'https://vladsetchin.me/tools/lyric-sheet-studio.html'
---

A no-build, single-HTML-file tool for turning plain-text song lyrics into a printable or savable lyric sheet — built for singing from an iPad or a printed page without fiddling with a word processor for every song.

## Background

I wanted a fast way to format lyrics for a physical or on-screen sheet: pick a device size, split into one or two columns, mark which lines are chorus, and get an image sized to fill the screen — without wrestling margins and font sizes by hand every time the lyrics are longer or shorter than the last song.

## Technical highlights

- **Auto-fit typography** — a binary search picks the largest font size (capped at 16px) that still lets the lyrics fit the chosen device's dimensions without overflowing, re-run on every edit.
- **Content-aware image export** — `html2canvas` renders the sheet, but the exported image is cropped to the actual text height rather than the full device canvas, so there's no dead space below a short song.
- **Shrink-wrapped single-column centering** — in one-column mode the text block sizes itself to its own longest line and centers as a unit, keeping each line left-aligned rather than individually centering ragged text.
- **Lightweight markup** — blank lines start a new verse/chorus block, a leading `*` marks a chorus line for italic/color styling, and `**double asterisks**` bold a word or name (handy for marking who sings which part).
- Runs entirely client-side — nothing typed leaves the browser; the draft persists to `localStorage` between visits.

## What I learned

Two rounds of "it's still not centered" turned out to be the same class of bug twice: a CSS selector written as `.col2` when the element only had `id="col2"`, silently matching nothing. Cheap to write, easy to miss without actually rendering the page — worth double-checking a fix against a real screenshot rather than the CSS in isolation.
