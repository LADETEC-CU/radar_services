# Developer & AI Agent Instructions (LADETEC Landing Page)

Architectural rules and conventions for the LADETEC landing page. Read this fully before editing. Visual/design rules live in [DESIGN.md](./DESIGN.md); this file owns stack, structure, i18n, and workflow.

Repo: `github.com/LADETEC-CU/radar_services` · single-package Astro site, static output.

---

## 1. Stack & Environment

| Tool         | Required                                                    | Verified on |
| :----------- | :---------------------------------------------------------- | :---------- |
| Node.js      | `>=22.12.0` (see `package.json` → `engines`)                | v25.9.0     |
| pnpm         | active package manager                                      | 11.5.2      |
| Astro        | `^6.4.6`                                                    | 6.4.6       |
| Tailwind CSS | `^4.3.1`, via `@tailwindcss/vite` (no `tailwind.config.js`) | 4.3.1       |
| Swiper       | `^12.2.0` (testimonials carousel, web-component build)      | 12.2.0      |
| Leaflet      | `^1.9.4` (hero live radar map, + `@types/leaflet`)          | 1.9.4       |

- **Package manager is `pnpm`** — do not introduce `npm`/`yarn` lockfiles. Commit `pnpm-lock.yaml`.
- Use whatever Node version manager you have (`nvm`/`fnm`/`volta`) to select a Node that satisfies `engines`. Do not hardcode another machine's version-manager path into scripts or docs.

**Commands** (from repo root):

```bash
pnpm install      # install deps
pnpm dev          # dev server → http://localhost:4321
pnpm build        # production build → ./dist/
pnpm preview      # serve the built ./dist/ locally
pnpm deploy       # build + `npx wrangler pages deploy dist` (Cloudflare Pages)
pnpm astro ...    # CLI, e.g. `pnpm astro check`
pnpm optimize:images [paths] [--max <px>] [--delete]   # convert raster assets to WebP (see §8)

# Quality gate — run before committing/pushing (see §7)
pnpm verify       # lint + format check + astro check + build + internal link crawl
pnpm verify:full  # same, but also validates external links (slow, flaky)
```

`astro.config.mjs` declares **no `output`** and **no adapter**, so Astro builds a fully static site to `dist/`.

---

## 2. Project Structure

```
src/
├── layouts/Layout.astro      # <html>/<head>, SEO+i18n head (canonical/hreflang/og), fonts, theme flash, grid overlay, SiteControls, <slot/>
├── pages/                    # ROUTES ONLY — every file is a thin wrapper over components/pages/ (see below)
│   ├── index.astro           # English landing  →  /  (default locale, unprefixed)
│   ├── blog.astro            # English blog index  →  /blog/
│   ├── blog/[slug].astro     # English blog post  →  /blog/<slug>/
│   ├── 404.astro             # 404 page redirecting to /
│   └── es/                   # Spanish twins  →  /es/, /es/blog/, /es/blog/<slug>/
├── components/
│   ├── pages/                # shared page bodies: LandingPage, BlogIndexPage, BlogPostPage
│   └── *.astro               # section components (see §5)
├── i18n/
│   ├── en.json               # English UI strings (translator-editable)
│   ├── es.json               # Spanish UI strings (translator-editable)
│   ├── ui.ts                 # i18n config + types (languages, defaultLang, UIKey, parity guard)
│   └── utils.ts              # helpers (resolveLang, useTranslations, otherLang, getRouteFromPathname)
├── content.config.ts         # Astro content collection configuration for blog
├── content/blog/             # Markdown blog posts per locale ({es,en}/*.md)
├── lib/blog.ts               # Blog data layer helpers (getPosts, makeBlogPaths, postImage)
├── scripts/                  # client-side TS extracted from big components (hero-radar.ts, site-controls.ts)
├── data/
│   ├── testimonials.en.json  # English testimonial quotes (data-driven)
│   └── testimonials.es.json  # Spanish testimonial quotes (data-driven)
└── styles/                   # global.css (Tailwind + tokens) + per-feature CSS (hero-radar.css, site-controls.css)
public/                       # static assets (favicon, ... , testimonial avatars as .webp)
scripts/optimize_images.py    # JPG/PNG → WebP converter (see §8)
```

**Locale routes are thin wrappers.** Each EN/ES route pair renders the same shared page component from `src/components/pages/` (`LandingPage`, `BlogIndexPage`, `BlogPostPage`); the route only sets the active locale (see §3), and `[slug]` routes additionally export `getStaticPaths = makeBlogPaths("<lang>")` from `lib/blog.ts`. **Never duplicate page markup into a route file** — add/remove sections in the shared component and both locales pick it up.

**File-size rule:** keep files near ~300 lines. When a component grows past that, extract its CSS to `src/styles/<feature>.css` (imported from frontmatter) and its client script to `src/scripts/<feature>.ts` (imported from the component's `<script>`), as Hero and SiteControls already do.

Design tokens & visual rules: see [DESIGN.md](./DESIGN.md).

---

## 3. Internationalization (EN / ES)

> **History:** the original client-side `lang-en`/`lang-es` span-toggle is gone, and the interim "inline `locale === 'es' ? … : …` ternary in every component" pattern has also been replaced. Do not reintroduce either. All UI strings now live in a central per-locale dictionary; components never hold literal copy.

Routing is **Astro's built-in i18n**, configured in `astro.config.mjs`:

```js
site: 'https://www.ladetec.com', // required for absolute canonical/hreflang/og URLs
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  routing: {
    prefixDefaultLocale: false,   // default locale (en) is unprefixed at root /
  },
},
```

- **Default locale is unprefixed** — English (default) lives at `/` (root), Spanish at `/es/`. Each locale is a real route resolved **server-side** at build.
- `src/pages/404.astro` handles all unknown routes (like `/en/` or any other dead page) and redirects them client-side back to root `/`.
- `getRouteFromPathname` strips the leading locale segment only for non-default locales (since English default is unprefixed), so the language switcher and hreflang tags build correct cross-locale URLs.

### Translation strings — `src/i18n/`

| File                 | Role                                                                                                                                                                                                                                                     |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `en.json`, `es.json` | Flat `key → string` dictionaries. **Translators edit these**, not components. Same keys in both files.                                                                                                                                                   |
| `ui.ts`              | Config + types: `languages`, `defaultLang`, `localeCode`, `ogLocale`, the `UIKey` type (derived from `en.json`), and a compile-time **parity guard** (`es satisfies Record<UIKey, string>`) that fails `astro check` if a key is missing from `es.json`. |
| `utils.ts`           | Pure helpers: `resolveLang`, `useTranslations`, `otherLang`, `getRouteFromPathname`, `localeList`. No `astro:*` imports.                                                                                                                                 |

**Consume strings** in any component/layout via the translator (never branch on locale for copy):

```astro
---
import { resolveLang, useTranslations } from "../i18n/utils";
const lang = resolveLang(Astro.currentLocale);
const t = useTranslations(lang);
---

<a href="#contact">{t("hero.cta.secondary")}</a>
<option value="consultation">{t("contact.intent.consultation")}</option>
```

- **Rich text with inline markup** (e.g. `<strong>`) is stored as an HTML string and rendered with `set:html`:
  ```astro
  <p class="…" set:html={t("hero.lead")} />
  ```
  Split styled headlines into separate keys instead (`hero.title.lead` + `hero.title.accent`) rather than embedding `<span>`/`<br>` in one string.
- **Fallback:** `t(key)` returns the default-locale string if the key is missing in the active locale — a half-translated `es.json` never ships an empty string.

### Data-driven content

Testimonial quotes are split per locale in `data/testimonials.<lang>.json` (each a flat array of `{ name, position, image, body }` — no `_en`/`_es` suffixes). The component picks by locale through a map, not a ternary:

```js
const testimonialsByLang = { en: enTestimonials, es: esTestimonials };
const testimonials = testimonialsByLang[lang].map(/* … */);
```

Blog posts are also per-locale: `src/lib/blog.ts` loads Markdown entries from `src/content/blog/{es,en}/*.md` (`getPosts(lang)`).

### Language switcher

A plain link in `Header.astro`, built with the native `astro:i18n` helper so it points at the _same_ route in the other locale (no JS, no class toggle):

```astro
import {getRelativeLocaleUrl} from "astro:i18n"; const target = otherLang(lang); const switchHref =
getRelativeLocaleUrl(target, getRouteFromPathname(Astro.url.pathname, lang));
```

### SEO (i18n)

`Layout.astro` emits, per page, using `getAbsoluteLocaleUrl` (requires `site` in config):

- `<link rel="canonical">` for the current locale URL.
- `<link rel="alternate" hreflang>` for **every** locale plus `x-default` (→ default locale).
- `<html lang>` set to the active locale.
- Open Graph / Twitter tags with `og:locale` for the active locale and `og:locale:alternate` for the others.

**Rule:** every new user-facing string gets a key added to **both** `en.json` and `es.json` (the parity guard enforces this at `astro check`). New pages get their alternates for free — keep `getRouteFromPathname` correct if you add nested routes.

---

## 4. Theme & Flash Prevention

- The site is **dark by default**: `Layout.astro` renders `<html lang={lang} class="dark">`.
- An **inline `is:inline` script** in `<head>` reads `localStorage.theme` (default `dark`) and toggles `.dark` before paint to avoid a flash. **It handles theme only — not language.** Do not move, defer, or remove it.
- The theme toggle lives in `Header.astro`: it flips the `.dark` class and persists `localStorage.theme` (`dark`/`light`).
- All color decisions go through semantic tokens — see [DESIGN.md](./DESIGN.md). Never hardcode raw colors in components.

---

## 5. Components Reference

All components resolve the locale via `resolveLang(Astro.currentLocale)` and pull copy through `useTranslations(lang)` → `t('key')` (§3) — no literal strings in markup.

| Component                       | Responsibility                                                                                                                                                                                                                                                          |
| :------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `layouts/Layout.astro`          | `<head>`: locale-aware title/description, canonical + hreflang alternates (+ x-default), Open Graph/Twitter tags, Google Fonts, theme flash script, fixed technical-grid overlay, `<SiteControls/>`, content `<slot/>`, shared theme-toggle script.                     |
| `components/SiteControls.astro` | Site-wide floating capsule navbar: nav menu (dropdown / link row), theme toggle, language switch. Rendered from `Layout` on every route. Scroll-spy + smart hide-on-scroll in `scripts/site-controls.ts`; styles in `styles/site-controls.css`.                         |
| `components/Hero.astro`         | Split hero: copy column (eyebrow, headline, chips, CTAs, proof stats) + **live radar map** — Leaflet base tiles (CARTO), IP geolocation, RainViewer past-frames playback with scrubbable timeline. Logic in `scripts/hero-radar.ts`; styles in `styles/hero-radar.css`. |
| `components/CoreTriad.astro`    | Capability cards (Hardware / Software / R&D) with scan-line animation.                                                                                                                                                                                                  |
| `components/Metrics.astro`      | Stat counters and grayscale partner logos.                                                                                                                                                                                                                              |
| `components/TechFocus.astro`    | Specifications list + volumetric radar tablet mock-up (`public/img/example.png`).                                                                                                                                                                                       |
| `components/Testimonials.astro` | Swiper carousel; quotes from `data/testimonials.<lang>.json` (picked by locale); per-quote dynamic font sizing + initials-fallback avatars.                                                                                                                             |
| `components/Contact.astro`      | Consultation form. **Client-only stub** — `onsubmit` calls `preventDefault()` + `alert()`; there is no backend/submission. Wire a real handler before relying on it.                                                                                                    |
| `components/Footer.astro`       | Footer.                                                                                                                                                                                                                                                                 |
| `components/BlogGrid.astro`     | Blog index card grid; posts from `lib/blog.ts` (`getPosts(lang)`), card image via `postImage()`, empty state when collection is empty in dev.                                                                                                                           |
| `components/BlogPost.astro`     | Single post: title, date, inline images, body rendered via `<Content />`.                                                                                                                                                                                               |
| `components/pages/*.astro`      | Shared page bodies (`LandingPage`, `BlogIndexPage`, `BlogPostPage`) rendered by the thin locale routes (§2).                                                                                                                                                            |

---

## 6. Known Stubs & Gotchas

- **Contact form has no backend.** It only shows an alert. Treat as a placeholder.
- **Blog posts are loaded from local Astro Content Collections** in `src/content/blog/{es,en}/*.md` at build time without network calls. In production builds, empty blog collections or unreviewed posts (`needsReview: false`) cause the build to fail.
- **The hero calls external APIs at RUNTIME**: `ipwho.is` → `ipapi.co` (IP geolocation, sequential fallback), `api.rainviewer.com` (radar frames), CARTO tile CDN. All degrade gracefully (fallback view / "no data" notice), but a visitor's IP is sent to third parties — keep this in mind for privacy/GDPR review.
- **Swiper** uses the web-component build (`swiper-container`/`swiper-slide`) registered client-side; it's initialized with `init="false"` then configured in a `<script>`. Keep that init pattern if editing.
- **Locale route pairs are thin wrappers** over `components/pages/` (§2) — never fork page markup per locale.
- **No unit-test suite** currently. Run the **`pnpm verify` gate** (§7) plus a manual pass over both `/` and `/es/`, light and dark. The gate already runs `astro check` (type errors + the i18n key-parity guard — a key in `en.json` missing from `es.json` fails here, not at build) and a link crawl.
- **`site` in `astro.config.mjs` must be the real production domain** — canonical, hreflang, and `og:url`/`og:image` are built from it. A wrong value ships wrong SEO URLs even though the build passes. `@astrojs/sitemap` also reads `site`, so a wrong value ships a wrong `sitemap-index.xml`.

---

## 7. Quality Gate (`pnpm verify`)

Run it **locally before pushing** (no git hook installs it — that's on you / AI agents, see CONTRIBUTING.md). CI also enforces it: [`.github/workflows/verify.yml`](.github/workflows/verify.yml) runs `pnpm verify` on every push to `master` and every PR (blocking). PRs additionally get a **non-blocking** external-link check (`verify:links:full`) — external sites time out / rate-limit, so they surface dead outbound URLs without failing the merge.

```bash
pnpm verify        # run before every push
pnpm verify:full   # same + external-link check (slow, flaky)
```

`pnpm verify` runs in order, **stops at first failure**:

| Step | Command                      | Catches                                                  |
| :--- | :--------------------------- | :------------------------------------------------------- |
| 1    | `pnpm lint`                  | ESLint errors (warnings don't fail).                     |
| 2    | `pnpm format:check`          | Unformatted files. Fix with `pnpm format`.               |
| 3    | `pnpm check` (`astro check`) | `.astro`/TS errors, broken props, i18n key-parity guard. |
| 4    | `pnpm build`                 | Broken pages, bad imports, missing assets.               |
| 5    | `pnpm verify:links`          | Broken **internal** links, crawled over built `dist/`.   |

Link crawl = **linkinator** over `dist/`. `.linkinatorrc.json` = internal only (external/`mailto:`/`tel:` skipped); `.linkinatorrc.full.json` (via `verify:links:full`) = also external. Standalone `pnpm verify:links` needs `dist/` already built.

---

## 8. Image Optimization

Raster assets in `public/` ship as **WebP**. The converter is [`scripts/optimize_images.py`](scripts/optimize_images.py) (Python 3 + [Pillow](https://python-pillow.org/), the project's only non-Node tooling dependency — `pip install Pillow`).

```bash
pnpm optimize:images                                                     # everything under public/
pnpm optimize:images public/assets/img/testimonials --max 256 --delete   # avatars: cap longest side to 256px, remove JPGs
python3 scripts/optimize_images.py --help                                # full option list
```

- Walks files/dirs (recursive), writes a sibling `.webp` next to each `.jpg`/`.jpeg`/`.png`.
- `--quality <1-100>` (default 80), `--max <px>` downscales preserving aspect ratio (**never upscales**), `--delete` removes the source, `--force` re-encodes even if the `.webp` is newer, `--dry-run` previews.
- **References are not rewritten automatically.** After converting, update any usages — for testimonial avatars that's the `image` field in `data/testimonials.<lang>.json` (`…/name.jpg` → `…/name.webp`). Components serve these via a plain `<img src>` from `public/`, so a path swap is all that's needed.
- Testimonial avatars render at 56px (`w-14`), so 256px is a retina-safe cap. The existing set was converted at `--max 256 --quality 80` (~70% smaller).
