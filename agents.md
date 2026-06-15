# Developer & AI Agent Instructions (LADETEC Landing Page)

This file contains crucial instructions, architectural rules, and guidelines to ensure that any developer or AI coding assistant maintains consistency when working on the LADETEC landing page repository.

---

## 1. Technical Stack & Environment Rules

*   **Node.js Environment:** You **MUST** use Node.js **v26.3.0**. The default system Node.js version might be older (e.g. v20.x), which is not supported by Astro v5.
    *   *Command pattern to run dev server:*
        ```bash
        source /home/vladimir/.nvm/nvm.sh && nvm use v26.3.0 && pnpm dev
        ```
    *   *Command pattern to build the project:*
        ```bash
        source /home/vladimir/.nvm/nvm.sh && nvm use v26.3.0 && pnpm build
        ```
*   **Frameworks:** Astro v5 (static output configuration) and Tailwind CSS v4 (integrated using `@tailwindcss/vite`).
*   **Package Manager:** `pnpm`.

---

## 2. Design System & Theme Rules

*   **Symmetric Themes:** All color tokens are mapped as CSS custom properties in `src/styles/global.css`.
    *   Light theme colors are defined under `:root`.
    *   Dark theme colors are defined under `.dark` (the default state).
*   **Tailwind Integration:** Colors must be configured under Tailwind v4 `@theme` directives in `global.css` using `var(--color-...)` values.
*   **Aesthetics:** The layout includes a technical overlay grid, glassmorphism panel styles (`.glass-panel`), and scan-line animations. Do not hardcode static colors (like `bg-zinc-800` or `text-slate-200`) in components; always use theme semantic variables (e.g. `bg-background`, `text-on-background`, `text-primary-container`).

---

## 3. Bilingual (EN/ES) Client-Side Translation Rules

To ensure a seamless user experience, we employ a client-side bilingual toggling mechanism:

*   **HTML Structure:** Translate all textual content by rendering both English and Spanish nodes side-by-side:
    ```html
    <span class="lang-en">English Text</span>
    <span class="lang-es">Texto en Español</span>
    ```
*   **CSS Control:** The visibility of these blocks is managed dynamically in `global.css` based on the `.lang-es` class on the `<html>` element:
    ```css
    html.lang-es .lang-en { display: none !important; }
    html:not(.lang-es) .lang-es { display: none !important; }
    ```
*   **Flash Prevention:** An inline script in `Layout.astro`'s `<head>` instantly reads `theme` and `lang` settings from `localStorage` and applies `.dark` and `.lang-es` classes before any HTML renders. Do not move or alter this script.
*   **Form Selector Options:** Browser elements like `<select>` dropdowns can break when nesting `<span>` tags inside `<option>` tags. For dropdown options, always use a clean bilingual text separator:
    ```html
    <option value="intent">English Option | Opción en Español</option>
    ```

---

## 4. Components Reference

*   `src/layouts/Layout.astro` - Base wrapper containing global styles, metadata, and flash prevention script.
*   `src/components/Header.astro` - Fixed header with mobile drawer menu, theme switch button, and language toggle button.
*   `src/components/Hero.astro` - Hero section with a dynamic coordinate tracker script that updates latitude/longitude on mouse movement.
*   `src/components/CoreTriad.astro` - Capabilities cards (Hardware, Software, R&D) with scan-line animations.
*   `src/components/Metrics.astro` - Stat counters and grayscale partner logos.
*   `src/components/TechFocus.astro` - Specifications list and the custom volumetric radar tablet mock-up (`public/radar_analytics_ui.png`).
*   `src/components/Contact.astro` - Consultation form.
*   `src/components/Footer.astro` - Bottom footer section.
