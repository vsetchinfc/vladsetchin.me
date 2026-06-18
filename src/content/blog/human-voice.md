---
title: 'Human Voice — Teaching AI to Stop Sounding Like AI'
description: 'Why I built a library of profession-specific writing skills, and why "write professionally" is the wrong instruction to give an LLM.'
pubDate: 2026-06-16T16:02:00
tags: ['prompt-engineering', 'llm', 'writing']
heroImage: 'images/blog/human-voice.png'
thumbnail: 'images/blog/human-voice-square.png'
heroImageLight: true
draft: false
---

Every AI-generated cover letter leads with the wrong thing. Every proposal reads like marketing copy. Every client email sounds like it came out of the same template — because, functionally, it did. That's the problem [Human Voice](https://github.com/vsetchinfc/human-voice) is built to fix.

## The actual problem

The instinct when AI writing sounds generic is to add more tone guidance: "write professionally," "sound more confident," "be concise." None of it works for long, because tone isn't the problem. A consultant's proposal and a job seeker's cover letter aren't solving the same problem — one is building trust through credibility signals, the other through fit and motivation. Giving both the same style adjective just produces two equally generic documents with different fonts.

## What it does

Human Voice is a library of self-contained, platform-agnostic writing skills — one markdown file per profession. Each skill encodes how a real professional in that role actually communicates: what to lead with, what to cut, which phrases are dead giveaways of AI authorship.

A few things that make it work in practice:

- Each skill is a single, dependency-free markdown file with a `Profile` and `Instructions` section — no build step, no framework
- Works anywhere: system prompt, custom instruction, or a `.claude/skills/<name>/SKILL.md` drop-in. No lock-in to ChatGPT, Claude, Cursor, or Gemini specifically
- Document-aware — the job-seeker skill treats a cover letter, a recruiter follow-up, and LinkedIn outreach as three different documents with three different rules, not one generic "job search tone"
- Skills ship with explicit banned-phrase lists, not just vibes — "I am writing to express my interest" is banned outright, not just discouraged

## What I learned building it

The lesson that generalizes past this project: encoding the *purpose* of a document — what trust problem it's solving, what the reader needs to decide — produces better output than encoding a style. "Sound professional" is a style instruction. "This document needs to prove fit without sounding desperate" is a purpose instruction, and it's the one that actually changes what the model writes.

Source and the full skill library are on [GitHub](https://github.com/vsetchinfc/human-voice).
