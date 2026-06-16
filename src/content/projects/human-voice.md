---
title: 'Human Voice — Profession-Specific AI Writing Skills'
summary: 'Compact, profession-specific writing skills that teach an LLM how a real professional in that role actually communicates — not template AI prose.'
date: 2026-06-05
tags: ['Prompt Engineering', 'LLM Skills', 'Markdown']
repoUrl: 'https://github.com/vsetchinfc/human-voice'
featured: true
---

A library of self-contained, platform-agnostic writing skills — one markdown file per profession, designed to stop AI-generated cover letters, proposals, and client emails from all sounding like the same brochure copy.

## Background

AI writing tools default to a generic register: every cover letter leads with the wrong thing, every proposal reads like marketing copy, every client email sounds like a template. The fix isn't a longer prompt — it's giving the model a real professional's voice: what to lead with, what to cut, what phrases to avoid.

## Technical highlights

- Each skill is a single, dependency-free markdown file with a `Profile` and `Instructions` section
- Works as a system prompt, custom instruction, or `.claude/skills/<name>/SKILL.md` drop-in — no platform lock-in (ChatGPT, Claude, Cursor, Gemini)
- Document-aware: a job-seeker skill distinguishes a cover letter from a recruiter follow-up from LinkedIn outreach, each with its own rules
- Skills ship with explicit banned-phrase lists, not just tone guidance

## What I learned

Tone instructions ("write professionally") don't transfer between professions because professionals don't share a voice — a consultant's proposal and a job-seeker's cover letter solve different trust problems. Encoding the *purpose* of each document type, not just a style adjective, is what actually changes output quality.
