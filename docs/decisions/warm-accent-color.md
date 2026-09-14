# Design Decision: Warm State/Status Color (Amber)

**Date:** 2026-06-20
**Status:** Decided — not yet implemented in `src/styles/global.css`

## Context

A design review of vladsetchin.me ([`docs/design-system.md`](../design-system.md)) found the site runs a strict single-hue (green) palette — every token, including "neutral" backgrounds and text, carries a green undertone. This is a deliberate, well-executed monochromatic system and should not be diluted with a second *decorative* brand color.

But the review also surfaced a real gap: there is no token for "this needs to read as different" — a stale/legacy content marker, a deprecated tag, a featured-post highlight. The blog teaser thumbnails (bright red/cyan stock-style graphics) are evidence of this gap in practice: with no on-palette warm color to reach for, off-palette colors crept in by necessity.

### Relevant prior decision

A separate, earlier note (`project_vladsetchin-palette-pricing`, recorded 2026-06-17) had already discussed adding a second accent — specifically "orange/gold" — and decided **against** a site-wide secondary accent for pricing/CTA emphasis. That decision was scoped to a *pricing/urgency* use case (checkout-style "buy now" emphasis) and explicitly deferred to "if a paid product/pricing section is added," scoped only to that section.

This decision is **narrower and different in purpose**: a *state/status* token (legacy content, deprecated, featured), not a pricing/urgency accent. The two should not be conflated — if a pricing section is added later, it gets its own scoping decision, which may or may not reuse this same amber value.

## Decision

Add one new warm color pair, named as a **state token**, not a brand accent:

| Theme | Token | Value | Background it pairs with |
|---|---|---|---|
| Dark | `--color-warn` | `#f0a847` | `#0a0e0c` |
| Light | `--color-warn` | `#b45309` | `#f7f9f7` |

**Why amber over the other two candidates considered (coral, mustard):** amber is the closer match to the prior "orange/gold" pricing-note language, stays calm rather than reading as a hard alert (ruling out coral, which skews toward an urgency/error color the prior note already decided against introducing site-wide), and is more legible as a status signal than mustard's softer, more editorial tone.

## Scope — where this token is allowed to appear

- A "legacy/stale content" disclosure tag on older blog posts (concrete first use case: the ported 2021 PuppeteerSharp/GCP post, which already carries an honest staleness caveat in prose but no visual tag)
- A "deprecated" or "archived" tag, if/when one is needed on a project or post
- A "featured" tag, if a featured-post pattern is introduced

## Explicitly out of scope

- Any pricing/CTA/urgency use — that remains governed by the separate `project_vladsetchin-palette-pricing` decision and its own scoping rule (paid-product section only, not site-wide).
- Use as a second decorative brand color anywhere in nav, hero, or section headers — the single-accent green identity stays as-is everywhere else.
- Use as an error/destructive color — if a true error state is ever needed (form validation, etc.), that should be evaluated separately rather than assumed to be this same amber.

## Open implementation work (not yet done)

1. Add `--color-warn` to `:root` (dark default) and `[data-theme='light']` in `src/styles/global.css`.
2. Add a `.tag--warn` (or similarly named) utility class for the tag-pill use case, consistent with existing `.card`/tag-pill patterns.
3. Apply the new tag to the PuppeteerSharp/GCP post as the first real usage.
4. No other site changes — this token is additive, not a restyle.
