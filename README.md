# 📡 LADETEC :: webpage

Website for **[ladetec.com](https://www.ladetec.com)**: sovereign weather-radar engineering — hardware, software, and R&D for meteorological radar systems.

![Astro](https://img.shields.io/badge/Astro-6.4-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38BDF8?logo=tailwindcss&logoColor=white)
![Node](https://img.shields.io/badge/Node-%E2%89%A522.12-339933?logo=nodedotjs&logoColor=white)

## ✨ Highlights

- 📶 **WebGL radar-sweep shader** in the hero, reacting to time and mouse (degrades gracefully).
- 🌎 **Multilingual** — ships in Spanis 🇨🇺 and English 🇺🇸 today, built to add more locales.
- 🌑 **Dark-first** theming with Material-3 semantic tokens via Tailwind v4.
- ⚡ **Static output** — no backend, deploy anywhere.

## 🚀 Quick start

```bash
pnpm install      # install dependencies
pnpm dev          # dev server → http://localhost:4321
pnpm build        # production build → ./dist/
pnpm preview      # serve the build locally
pnpm verify       # quality gate before pushing — lint + format + types + build + link check
```

## 🖼️ Image optimization

Raster assets ship as **WebP**. Convert sources with the helper script (Python + [Pillow](https://python-pillow.org/)):

```bash
pnpm optimize:images                                              # convert everything under public/
pnpm optimize:images public/assets/img/testimonials --max 256 --delete   # avatars: cap to 256px, drop the JPGs
python3 scripts/optimize_images.py --help                         # all options
```

It walks files/dirs, writes a sibling `.webp`, can downscale (`--max`, never upscales) and remove originals (`--delete`). Update any `.jpg`/`.png` references (e.g. `src/data/testimonials.<lang>.json`) to point at the new `.webp`. Requires `python3` + Pillow (`pip install Pillow`).

## 🗂️ Structure

```
src/
├── layouts/      # <head>, fonts, theme, grid overlay
├── pages/        # / (EN) and /es/ (ES) routes
├── components/   # Hero, CoreTriad, Metrics, Testimonials…
├── i18n/         # locale strings + helpers
├── data/         # bilingual content
└── styles/       # Tailwind + design tokens
scripts/          # maintenance tooling (e.g. optimize_images.py)
```

## 📚 Docs

- 🎨 [DESIGN.md](./DESIGN.md) — colors, typography, UI classes, aesthetic direction.
- 🛠️ [AGENTS.md](./AGENTS.md) — stack, structure, i18n rules, components, gotchas.

## 🔧 Status

🚧 Pre-release `v0.0.1` — work in progress.

## 🪪 License

This project may be reused under the terms of the [license](./LICENSE), but the **LADETEC** name, its branding, and identity may not be used to imply endorsement or affiliation. See [TRADEMARKS.md](./TRADEMARKS.md).
