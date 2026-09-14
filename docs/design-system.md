# Design System

Source of truth: `src/styles/global.css`. Single CSS-custom-property token system, themed via `[data-theme='light']` / default (dark). No Tailwind config, no separate token files — everything lives in this one file.

## Typography

| Token | Value |
|---|---|
| `--font-base` / `--font-mono` | `'JetBrains Mono', 'Consolas', 'Monaco', monospace` |
| `--text-xs` | `0.75rem` |
| `--text-sm` | `0.875rem` |
| `--text-base` | `1rem` |
| `--text-lg` | `1.125rem` |
| `--text-xl` | `1.25rem` |
| `--text-2xl` | `1.5rem` |
| `--text-3xl` | `1.875rem` |
| `--text-4xl` | `2.25rem` |
| `--text-5xl` | `3rem` |

Monospace throughout — one typeface family, no serif/sans pairing. This is a deliberate terminal aesthetic, not an oversight.

**Applied scale:**
- `h1` → `--text-5xl`, `h2` → `--text-4xl`, `h3` → `--text-3xl` (h4–h6 unstyled, inherit base size)
- Headings: `font-weight: 700`, `line-height: 1.2`, color `--color-heading` (not `--color-text`)
- Body: `line-height: 1.6`, root `font-size: 16px`, drops to `14px` under the 768px breakpoint

## Color

| Token | Dark (default) | Light (`[data-theme='light']`) |
|---|---|---|
| `--color-accent` | `#00e08a` | `#067a4e` |
| `--color-bg` | `#0a0e0c` | `#f7f9f7` |
| `--color-surface` | `#101512` | `#eef2ef` |
| `--color-border` | `rgba(0, 224, 138, 0.16)` | `rgba(6, 122, 78, 0.2)` |
| `--color-text` | `#d4ded8` | `#16201b` |
| `--color-text-muted` | `#7d8c84` | `#4b5d54` |
| `--color-heading` | `#eafff2` | `#0c1410` |

Single accent color, no secondary. Intentional per [[project_vladsetchin-palette-pricing]] — revisit only if a paid product/pricing section is added.

## Spacing

| Token | Value |
|---|---|
| `--space-1` | `0.25rem` |
| `--space-2` | `0.5rem` |
| `--space-3` | `0.75rem` |
| `--space-4` | `1rem` |
| `--space-6` | `1.5rem` |
| `--space-8` | `2rem` |
| `--space-12` | `3rem` |
| `--space-16` | `4rem` |
| `--space-24` | `6rem` |

## Radius

| Token | Value |
|---|---|
| `--radius-sm` | `0.125rem` |
| `--radius` | `0.25rem` |
| `--radius-lg` | `0.375rem` |

## Layout

| Token | Value |
|---|---|
| `--max-width` | `1200px` |

## Effects

| Token | Value | Notes |
|---|---|---|
| `--focus-ring` | `0 0 0 3px rgba(0, 224, 138, 0.35)` | Accessibility focus indicator |
| `--card-shadow` | `none` | Flat, bordered "terminal window" style — no ambient shadow |
| `--card-hover-shadow` | `0 0 0 1px var(--color-accent), 0 0 24px rgba(0, 224, 138, 0.1)` (light: `0.08` alpha) | Accent glow ring on hover |

## Utility classes

- `.container` — `max-width: var(--max-width)`, centered, responsive horizontal padding
- `.section` — vertical rhythm (`--space-24` padding); light theme adds a radial accent gradient overlay
- `.card`, `.teaser-card`, `.project-card`, `.post-link`, `.post-item article` — shared card treatment: `--color-surface` background, 1px bordered, `--radius-lg`, hover transitions to `--card-hover-shadow` + accent border
- `.section__title` / `.section__title-text` / `.section__title-icon` — section headers with a `// ` comment-style prefix and an accent underline bar

## Notes

- No component library, no Tailwind — token-driven plain CSS only.
- Subtle SVG-noise grain overlay on `body::before` (opacity `0.025`, `mix-blend-mode: overlay`) reinforces the terminal-screen feel.
- Theme switching is a single `data-theme` attribute toggle (`ThemeToggle` component) — all tokens re-resolve, no separate stylesheets.
