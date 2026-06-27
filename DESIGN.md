# Design System (LADETEC Landing Page)

This document is the **single source of truth for visual design**: color tokens, typography, spacing, custom UI classes, and aesthetic rules. Engineering, architecture, and i18n rules live in [AGENTS.md](./AGENTS.md).

> **Canonical file:** all tokens are defined in [`src/styles/global.css`](./src/styles/global.css). The tables below are documentation; if a value here disagrees with `global.css`, **`global.css` wins** — fix this doc, not the other way around.

---

## 1. Theme Architecture

The site is **dark-first**. The `<html>` element ships with `class="dark"` and an inline flash-prevention script in [`Layout.astro`](./src/layouts/Layout.astro) re-applies the theme from `localStorage` (`theme`, defaulting to `dark`) before paint.

Color tokens use a **Material-3-style semantic naming scheme** wired through Tailwind v4:

1. **Runtime values** live as CSS custom properties on two scopes in `global.css`:
   - `:root` → **light** theme values
   - `.dark` → **dark** theme values (the default)
2. **Tailwind utilities** are bound to those properties via the `@theme` block (`--color-background: var(--color-background)`, etc.). This indirection is what lets `bg-background`, `text-on-surface-variant`, etc. resolve to the active theme automatically.
3. The dark variant is registered with `@custom-variant dark (&:where(.dark, .dark *))`, so `dark:` utilities key off the `.dark` class, not the OS preference.

**Rule:** never hardcode raw colors in components (`bg-zinc-800`, `text-slate-200`, `#00f2fe`). Always use a semantic token utility (`bg-background`, `text-primary-container`, `border-outline`). New colors must be added as tokens in `global.css` for both `:root` and `.dark`.

---

## 2. Color Tokens

Full set defined in `global.css`. Brand-defining values below; consult the file for the complete surface/outline ramp.

| Token                                                     | Dark (default)        | Light                 |
| :-------------------------------------------------------- | :-------------------- | :-------------------- |
| `background` / `on-background`                            | `#0f131d` / `#dfe2f1` | `#f4f6fa` / `#1c1f2a` |
| `primary` / `on-primary`                                  | `#e0fdff` / `#00373a` | `#00676e` / `#ffffff` |
| **`primary-container`** (accent) / `on-primary-container` | `#00f2fe` / `#006a70` | `#008f97` / `#ffffff` |
| `secondary` / `on-secondary`                              | `#d7ffc5` / `#053900` | `#246d04` / `#ffffff` |
| `secondary-container` / `on-secondary-container`          | `#2ff801` / `#0f6d00` | `#79ff5b` / `#022100` |
| `surface` / `on-surface`                                  | `#0f131d` / `#dfe2f1` | `#ffffff` / `#2c303b` |
| `surface-variant` / `on-surface-variant`                  | `#313540` / `#b9cacb` | `#eef2f7` / `#434854` |
| `outline` / `outline-variant`                             | `#849495` / `#3a494b` | `#737785` / `#c3c7d2` |

Also available (dark/light pairs in `global.css`): `surface-dim`, `surface-bright`, and the container ramp `surface-container-lowest → -low → (base) → -high → -highest`.

**`primary-container` cyan (`#00f2fe` dark) is the signature accent** — used for the grid overlay, scan lines, glow buttons, the WebGL radar sweep, and active states.

---

## 3. Typography

Two families, loaded from Google Fonts in `Layout.astro`:

- **Inter** — body, display, headline (`--font-sans`, `--font-body-lg`, `--font-display-lg`, `--font-headline-md`).
- **JetBrains Mono** — technical labels and code-like UI (`--font-mono`, `--font-technical-label`).

Type scale (utility ⇒ size / line-height / weight):

| Utility                  | Size | Notes                                                       |
| :----------------------- | :--- | :---------------------------------------------------------- |
| `text-display-lg`        | 72px | hero headline (desktop), `-0.02em`, 700                     |
| `text-display-lg-mobile` | 40px | hero headline (mobile), `-0.01em`, 700                      |
| `text-headline-md`       | 32px | section titles, `-0.01em`, 600                              |
| `text-body-lg`           | 18px | body copy, line-height 1.6                                  |
| `text-body-sm`           | 14px | secondary copy                                              |
| `text-technical-label`   | 12px | uppercase, `0.1em` tracking, 500 — the "technical" UI voice |

**Convention:** small uppercase mono labels (`font-technical-label text-technical-label uppercase tracking-widest`) are the recurring "instrument readout" motif — nav links, eyebrows, badges, form labels.

---

## 4. Spacing & Radius

| Token                        | Value                        | Use                                        |
| :--------------------------- | :--------------------------- | :----------------------------------------- |
| `--spacing-container-max`    | 1280px                       | `max-w-container-max` page width           |
| `--spacing-margin-mobile`    | 20px                         | `px-margin-mobile` horizontal page padding |
| `--spacing-gutter`           | 24px                         | grid gutter                                |
| `--spacing-unit`             | 8px                          | base rhythm                                |
| `--radius-default` → `-full` | 0.125 / 0.25 / 0.5 / 0.75rem | intentionally tight, "engineered" corners  |

Radii are deliberately small — this is a technical/industrial aesthetic, not a soft consumer look.

---

## 5. Custom UI Classes & Animations

Defined in `global.css`, used across components:

- **`.glass-panel`** — glassmorphism: translucent dark fill, `backdrop-filter: blur(20px)`, faint cyan border. Used for cards (e.g. testimonials).
- **`.technical-grid`** — fixed full-viewport cyan grid overlay (80×80px), `pointer-events-none`, rendered once in `Layout.astro` behind all content.
- **`.scan-line`** — 2px cyan gradient bar animated top→bottom over 8s (`@keyframes scan`); the radar "sweep" motif on capability cards.
- **`.glow-button`** — cyan box-shadow that intensifies on hover plus a 2px lift; the primary CTA treatment.
- **`.material-symbols-outlined`** — variable-font settings for Material Symbols icons (`wght 200`).
- **`.active-tab`** — cyan bottom-border + text for active tab state.

The **Hero** additionally renders a bespoke **WebGL fragment shader** (radar sweep + simplex-noise storm cells + grid + vignette) on a `<canvas>`, reacting to `u_time`/`u_mouse`. It degrades gracefully (returns early if WebGL is unavailable). See [`Hero.astro`](./src/components/Hero.astro).

---

## 6. Aesthetic Direction

The product is sovereign weather-radar engineering; the design language is **a radar operator's console**:

- Dark obsidian field, cyan instrument glow, occasional neon-green telemetry.
- Monospace technical labels everywhere readouts would appear.
- Live, reactive motifs: the Hero shader, the mouse-driven coordinate tracker, scan lines, the pulsing "system status" dot.
- Glass panels and thin grid lines over depth blur — precision instrumentation, not marketing gloss.

When adding UI, ask: _would this look at home on a radar control surface?_ Prefer tokens and the classes above over inventing new visual primitives.
