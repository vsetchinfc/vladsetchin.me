---
title: 'agistra.dev — Multi-Agent AI Delivery System'
summary: 'A production multi-agent AI system with role-separated Architect, Builder, Tester, and Router agents, explicit handoff contracts, and HOT/WARM/COLD memory architecture.'
date: 2025-01-01
tags: ['Claude API', 'Multi-agent', 'TypeScript', 'MCP', 'AI Architecture']
repoUrl: 'https://github.com/vsetchinfc/agistra.dev'
featured: true
---

A production AI delivery system I designed and operate for consulting work. It replaces the single-LLM-in-a-loop pattern with role-separated agents that have explicit responsibilities, handoff contracts, and failure-mode handling.

## Architecture

Four agents with strict role separation:

- **Architect** — system design, ADRs, scoping, ticket creation
- **Builder** — implementation only; cannot create tickets or override scope
- **Tester** — black-box QA; cannot read implementation intent, only test outcomes
- **Router** — inter-team relay and message classification

Each agent has a HOT/WARM/COLD memory tier written to disk between sessions. Compaction is handled explicitly — context loss mid-task is an expected failure mode, not an edge case.

## Key design decisions

- **Handoff contracts** — every ticket passed to Builder must have testable acceptance criteria, scope boundaries, and a named verifier. An underscoped ticket is returned, not guessed through.
- **Fail counter** — on a third consecutive test failure, the ticket is parked and escalated. No infinite retry loops.
- **Model routing** — simple tickets run on Haiku; complex multi-file work or debugging runs on Sonnet. This is a runtime dispatch decision, not a config flag.
- **File-based queue** — no external message broker. State lives in markdown files committed to git. The queue survives process restarts and is human-readable.

## What I learned

Where agent systems actually fail: at handoff boundaries, not during execution. The failure modes that matter are underspecified scope, silent context loss, and retry loops that mask the original error. Designing around these required explicit contracts, not better prompts.
