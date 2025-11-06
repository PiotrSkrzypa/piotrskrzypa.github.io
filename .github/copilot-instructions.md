## Repo snapshot

This repository is a static personal portfolio site (HTML/CSS/JS) based on the DevFolio Bootstrap template. It's authored as a GitHub Pages site in a repo named `piotrskrzypa.github.io` and served from the repository root.

Key places to look (quick index):
- `index.html` — main entry; includes vendor libraries and loads `assets/js/localization.js`, `assets/js/portfolio-details.js`, `assets/js/main.js`.
- `portfolio-details.html` — details page for projects (reads `?id=...` and calls `window.loadPortfolioDetails`).
- `assets/js/portfolio-details.js` — source of `window.projectsData` (project metadata, slides, images/videos) and `loadPortfolioDetails()` implementation.
- `assets/js/localization.js` — `window.translations` object and `setLanguage()`; controls all `data-key` translations and language switching.
- `assets/js/main.js` — UI behavior (AOS, isotope, fillPortfolioContainer) and initialized on DOMContentLoaded.
- `assets/img/portfolio/*` — per-project image folders and logos.
- `assets/css/main.css` — local CSS overrides (do not change vendor CSS unless needed).

## Goals for an AI code agent operating on this repo
- Make small, safe edits to content (projects, translations, images) without touching vendor/third-party libraries.
- Be explicit when changing runtime behavior in `main.js` / `portfolio-details.js` — changes affect both index and details pages.
- Preserve expected keys and DOM attributes used by the JS translation system: `data-key` and `data-use-html`.

## Project-specific patterns and conventions (do not invent alternatives)
- Translation model: elements that should be translated have a `data-key` attribute. If the element has `data-use-html="true"`, the agent must write HTML into `innerHTML`; otherwise set `textContent`.
  - Example: In `index.html` a paragraph uses `data-key="aboutDescription"` and the English text lives in `assets/js/localization.js` under `translations.en.aboutDescription`.
- Projects are defined as plain JS in `assets/js/portfolio-details.js` in the global `window.projectsData` object. Project IDs (e.g. `project1`, `project2`) are used as keys for translation lookup: add `projectXshortDescription` and `projectXDescription` in `localization.js` for text shown on the index and details pages.
  - Example project entry:
    - `window.projectsData.project3 = { title: "8 Minute Empire", logo: "assets/img/portfolio/8MinuteEmpire/Logo.jpg", slides: [{type: 'video', src: '...'}, {type:'image', src:'...'}], ... }`
- Portfolio rendering: `main.js`'s `fillPortfolioContainer()` reads `window.projectsData` and writes DOM nodes; to add a project, update `portfolio-details.js` and localization keys — no build step required.
- YouTube videos are embedded with `?enablejsapi=1`. The page loads the YouTube iframe API once and reinitializes players via `window.onYouTubeIframeAPIReady()`; do not duplicate script injection.

## Safe edit rules (must follow)
- Never modify files under `assets/vendor/` unless the change is required and you document why (these are third-party libs).
- When adding image assets, place them under `assets/img/portfolio/<ProjectFolder>/` and reference them with a relative path.
- Keep project IDs stable — renaming keys in `window.projectsData` must be accompanied by corresponding translation keys and any links (`portfolio-details.html?id=...`).
- Preserve `data-use-html` semantics: if a translation is HTML, put the string in `translations.*` and ensure `data-use-html` is present on the element.

## How to add a new project (exact steps for the repo)
1. Add an entry to `assets/js/portfolio-details.js` inside `window.projectsData`, using an unused id (e.g. `project8`).
2. Add translation entries in `assets/js/localization.js`:
   - `translations.en.project8shortDescription` (used on index)
   - `translations.en.project8Description` (used on details page — set `data-use-html` where HTML is expected)
   - Repeat for `pl` if Polish copy is required.
3. Add images and/or video slides to `assets/img/portfolio/<ProjectFolder>/` and reference them in the `slides` array.
4. Verify locally by opening `index.html` in a browser (or using an editor Live Server) and clicking the project details link (`portfolio-details.html?id=project8`).

## How to add or change translations
- Edit `assets/js/localization.js` and place text under `translations.en` and/or `translations.pl`. Keep the same `data-key` names used in the markup. If the existing element uses `data-use-html`, the translation must be HTML-ready.
- `setLanguage()` in `localization.js` applies translations by scanning `[data-key]` elements.

## Dev / debug / deployment notes
- This is a static site — there is no build system present. Quick checks:
  - Open `index.html` in a browser (double-click or serve with VS Code Live Server) to validate changes.
  - The repository name `piotrskrzypa.github.io` implies GitHub Pages serving from the repo root; publishing = push to `main` (or the default branch configured for Pages).
- If you change JavaScript, test both the index and `portfolio-details.html` flows (the same JS is used on both pages).

## Integration points & external dependencies
- Vendor libs are under `assets/vendor/` and loaded directly in HTML; notable libraries:
  - Bootstrap 5, AOS, GLightbox, Isotope, Swiper, Typed.js, PureCounter, Waypoints.
- YouTube iframe API is loaded dynamically; do not load multiple copies.

## Examples for the agent (copy/paste-ready guidance)
- To update a project's short text (index): edit `assets/js/localization.js` → `translations.en.project1shortDescription = "New short text"`.
- To add a new image slide to `project1`: edit `assets/js/portfolio-details.js` and append `{ type: "image", src: "assets/img/portfolio/Clash/NewShot.jpg" }` to `project1.slides` and add the file to that folder.

## Final notes and checklist before committing
- Run the site locally and confirm:
  - New/edited translations appear when you switch language in the header.
  - Portfolio items show on the index and the details page shows slides and metadata.
  - No duplicate vendor script tags are introduced.
- Keep commits small and describe which files were updated (`portfolio-details.js`, `localization.js`, image files) so rollbacks are simple.

If anything in these instructions is unclear or you'd like more examples (e.g., a unit of automation for adding projects), tell me which part and I'll expand with exact diffs.
