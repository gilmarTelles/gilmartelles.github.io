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

- `index.html` - The whole site: single page with markup and metadata
- `styles.css` - Light academic design system, system font stack, responsive layout
- `lang.js` - EN/PT-BR translations and language toggle (all visible text is keyed here)
- `main.js` - Minimal stub (no theme system)
- `images/` - Static assets, including `headshot.png`
- `CNAME` - Custom domain configuration

## Content sections (index.html)

1. Profile header (photo, name, tagline, links)
2. Timeline (4 entries: senior DS, data analyst, masters, bachelors)
3. Projects (6 entries: LLM Assistant for Process Intelligence, Celonis AI Assistant, OCR Document Pipeline, Working Capital Dashboards, Payment Allocation Model, Celonis Migrator)
4. What I work on (6 items)
5. Tools (4 columns)
6. Contact

## Conventions

- Keep the site dependency-free unless explicitly approved.
- When adding visible text, add a `data-i18n` key and update both the HTML fallback text and `lang.js` translations (`en` and `pt`).
- Maintain keyboard accessibility for controls and links.
- Preserve the bilingual EN/PT-BR experience.
- Do not commit build artifacts.
- The site is intentionally light-only (no theme toggle).
