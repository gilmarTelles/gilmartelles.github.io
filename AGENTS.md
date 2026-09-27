# AGENTS.md

Guidance for coding agents working in this repository.

## Project overview

Personal portfolio website for Gilmar Telles, hosted on GitHub Pages at gilmartelles.com.

The site is plain static HTML/CSS/JS. It does not use Jekyll or a build step (`.nojekyll` disables Jekyll on GitHub Pages).

## Development

Local preview:

```bash
python3 -m http.server 4173
```

Then visit http://localhost:4173.

Deployment: push to the `main` branch. GitHub Pages deploys the static files directly.

## Architecture

- `index.html` - Home page: markup and metadata
- `projects/*.html` - Project case studies (Strongbox, Brazil tax reform). Each page defines its own translations in `window.GT_I18N` before loading `/lang.js`, and uses root-relative paths (`/styles.css`)
- `styles.css` - Light academic design system, system font stack, responsive layout
- `lang.js` - EN/PT-BR translations and language toggle for the home page; merges a page's `window.GT_I18N` and translates `data-i18n-alt` image alt text
- `main.js` - Minimal stub (no theme system)
- `images/` - Static assets: `headshot.png`, and case-study screenshots in `images/projects/<slug>/`
- `CNAME` - Custom domain configuration

## Content sections (index.html)

1. Profile header (photo, name, tagline, links)
2. Timeline (5 entries: freelance, two ExxonMobil roles, masters, bachelors; jobs use bullet lists with one `data-i18n` key per bullet)
3. Projects (2 freelance case studies, each linking to its page in `projects/`)
4. What I work on (6 items)
5. Tools (4 columns)
6. Contact

## Conventions

- Keep the site dependency-free unless explicitly approved.
- When adding visible text, add a `data-i18n` key and update both the HTML fallback text and the translations (`en` and `pt`): `lang.js` for the home page, the page's `window.GT_I18N` for a case study.
- Case studies show only freelance work. Do not name the client company or the consulting firm, and keep screenshots free of their names.
- Maintain keyboard accessibility for controls and links.
- Preserve the bilingual EN/PT-BR experience.
- Do not commit build artifacts.
- The site is intentionally light-only (no theme toggle).
