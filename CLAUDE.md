# CLAUDE.md

This file provides guidance to coding agents when working in this repository.

## Project overview

Personal portfolio website for Gilmar Telles, hosted on GitHub Pages at gilmartelles.com.

The site is plain static HTML/CSS/JS. It does not use Jekyll or a build step.

## Development

Local preview:

```bash
python3 -m http.server 4173
```

Then visit http://localhost:4173.

Deployment: push to the `main` branch. GitHub Pages deploys the static files directly.

## Architecture

- `index.html` - Main portfolio markup and page metadata
- `styles.css` - Light academic design system, responsive layout
- `lang.js` - EN/PT-BR translations and language toggle (all visible text is keyed here)
- `main.js` - Minimal stub (no theme system)
- `images/` - Static assets, including `headshot.png`
- `.nojekyll` - Bypasses Jekyll processing on GitHub Pages
- `CNAME` - Custom domain configuration

## Content sections (index.html)

1. Profile header (photo, name, tagline, links)
2. Timeline (4 entries: senior DS, data analyst, masters, bachelors)
3. Selected work (7 cards: ProcessOwl, Celonis AI, OCR, Working Capital, Payment Allocation, Celonis Migrator, Dengue)
4. What I work on (6 items)
5. Tools (4 columns)
6. Contact

## Conventions

- Keep the site dependency-free unless explicitly approved.
- When adding visible text, update both the HTML fallback text and `lang.js` translations.
- Maintain keyboard accessibility for controls and links.
- Preserve the bilingual EN/PT-BR experience.
- Do not commit build artifacts.
- The site is intentionally light-only (no theme toggle).