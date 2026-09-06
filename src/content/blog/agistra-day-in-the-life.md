---
title: 'A Day With My AI Team, Including the Part Where It Was Wrong'
description: 'A real bug found, fixed, and merged the same day by my AI dev team — and the moment later that day it caught itself being overconfident about the root cause.'
pubDate: 2026-09-06T12:00:00
tags: ['ai-agents', 'claude', 'multi-agent-systems', 'agistra']
draft: true
---

I asked Architect a plain question: "how does this hub look?" I expected a status summary. What actually happened is a better demonstration of the system than anything I could write as a pitch.

## The bug

Architect ran the hub's own health check — `npm run doctor` — and it crashed. Not a warning, a crash: `ERR_MODULE_NOT_FOUND`, a file the health checker imports that simply wasn't shipped to this hub.

It didn't stop there and report "doctor is broken." It traced the crash back through git history, found the exact commit that introduced the import three days earlier, confirmed the missing file had never been added to the deploy pipeline's copy list, and — because that's a mandatory step, not an optional one — checked whether the same shape of bug existed anywhere else nearby. It did: two more files had the identical gap, one of them a bug that predated the one it was originally looking for.

Then it filed the issue, wrote the ticket, and handed it to Builder with the acceptance criteria already spelled out: fix the copy list, add a test that actually catches this shape of bug in the future, prove it against a real deploy, not just a unit test.

Builder came back with a PR, a passing test suite, and a claim that the fix worked.

Architect didn't take that claim. It deployed a fresh hub itself, from Builder's branch, and ran the exact same health check that had crashed that morning. Clean. Then it read the diff line by line before saying so.

That's the part that doesn't show up in a feature list: the same agent that writes the fix is never the one who gets to declare it fixed.

## The part where it was wrong

A few hours later, chasing a related issue, both Builder and Architect independently hit the same failure: a Python package that installed fine but crashed the moment anything tried to import it. Looked exactly like a broken release on a public package registry. I got a bug report that said so, with a fix already proposed.

Then Architect went back and actually tried to reproduce it from scratch, one more time, before letting that conclusion stand. Clean install. Cleared the local cache first. It imported fine.

The original "broken published package" claim was wrong. What had actually happened, best evidence available, was a stale local cache — nothing to do with the package itself.

The fix that had already been written (a version bump, plus a real health check on top of the install step so this class of failure gets caught early regardless of cause) was still worth keeping. But the root-cause claim that shipped with it wasn't accurate, and instead of letting a wrong conclusion sit in a closed ticket, it went back and corrected the public record before calling anything done.

I didn't ask for that. Nobody was checking. It happened because "verify before reporting" isn't a suggestion in how this system runs — it's a hard gate, and it applies to the system's own conclusions, not just to what a teammate hands it.

## The part where it caught itself

Later the same day I asked a different kind of question: is a codebase-intelligence tool I'd installed actually being used? Direct answer: no. And the reason was specific enough to be useful — a safety mechanism meant to force the AI to check that tool before searching a codebase only watches one class of command, and the actual work that day had mostly gone through a different one. Nothing forced it.

That's a gap in a piece of the system I built, surfaced without being asked to look for it, the moment a direct question made it relevant — and it got fixed the same afternoon, with a test proving it can't silently regress again.

## What actually earns trust here

None of this is about the AI being right the first time. It wasn't, twice, in one day. What held up was the structure around it: a different role does the checking than the one that did the work, verification runs against the real system and not just against the claim, and a wrong conclusion gets corrected out loud instead of quietly buried once the ticket closes.

That's the whole pitch, honestly. Not "it doesn't make mistakes." It's "the mistakes don't survive contact with the next step."

Agistra is open source: [github.com/vsetchinfc/agistra.dev](https://github.com/vsetchinfc/agistra.dev).
