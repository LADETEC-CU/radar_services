# 🤝 Contributing

This guide applies to **human and AI contributors**. AI agents: the canonical, authoritative rules live in [AGENTS.md](./AGENTS.md) (architecture, i18n, conventions) and [DESIGN.md](./DESIGN.md) (visual system) — read both before editing. This file is the operational checklist; if it ever conflicts with AGENTS.md, **AGENTS.md wins**.

## 📋 Before you start

- Read [AGENTS.md](./AGENTS.md) and [DESIGN.md](./DESIGN.md).
- Code is open under [Apache 2.0](./LICENSE); the LADETEC brand is not — see [TRADEMARKS.md](./TRADEMARKS.md).
- Any contribution you submit is licensed under Apache 2.0 (LICENSE §5).

## 🛠️ Setup

```bash
pnpm install      # Node >= 22.12, pnpm only
pnpm dev          # http://localhost:4321
```

Use **pnpm**. Do not add `npm`/`yarn` lockfiles. Commit `pnpm-lock.yaml`.

## 🌿 Workflow

1. Branch from `master`: `feat/...`, `fix/...`, `docs/...`. One concern per branch.
2. Make the change. Keep the diff focused.
3. Run the gate before pushing — must pass:
   ```bash
   pnpm verify        # lint + format check + astro check + build + internal link crawl
   ```
   It stops at the first failure. If `format:check` fails, run `pnpm format` to fix, then re-run. Add `pnpm verify:full` to also validate external links (slow, flaky — optional). See AGENTS.md §7. **CI runs the same gate** on every PR (`.github/workflows/verify.yml`) — a red check blocks merge, so run it locally first.
4. Verify manually: load `/` and `/es/`, each in **light and dark**. There is no unit-test suite.
5. Open a PR with the template. Fill every checkbox honestly — do not check what you did not verify.

## ✅ Rules (enforced on every change)

- **Design tokens only.** Never hardcode raw colors (`bg-zinc-800`, `#00f2fe`). Use semantic utilities (`bg-background`, `text-primary-container`). New colors → add tokens in `global.css` for both `:root` and `.dark`. See DESIGN.md.
- **i18n is mandatory.** Every user-facing string must render in **all locales** (EN/ES today). No fallback layer — an untranslated string ships verbatim. See AGENTS.md §3.
- **Keep routes in sync.** Adding/removing a section means updating every locale's page.
- **No stub regressions.** The contact form and other stubs are noted in AGENTS.md §6 — do not silently rely on them.
- **Commits**: short, imperative, prefixed (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`).

## 🤖 For AI agents

- Treat the §✅ Rules and the PR checklist as hard gates, not suggestions.
- Cite the AGENTS.md / DESIGN.md section you relied on in the PR description.
- If a rule blocks the task, surface the conflict instead of working around it.
- Do not reintroduce the removed client-side language-toggle mechanism (AGENTS.md §3).

## 💬 Questions

Open an issue before large changes — saves rework.
