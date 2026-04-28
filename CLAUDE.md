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
- `styles.css` - Design system, responsive layout, light/dark themes
- `theme.js` - Light/dark theme toggle with localStorage persistence
- `lang.js` - EN/PT-BR translations and language toggle
- `main.js` - Hamburger menu, tabs, scroll reveal, header state, scroll-spy
- `images/` - Static assets, including `headshot.png`
- `.nojekyll` - Bypasses Jekyll processing on GitHub Pages
- `.impeccable.md` - Design context
- `CNAME` - Custom domain configuration

## Conventions

- Keep the site dependency-free unless explicitly approved.
- When adding visible text, update both the HTML fallback text and `lang.js` translations.
- Maintain keyboard accessibility for controls and links.
- Preserve the bilingual EN/PT-BR experience and light/dark theme support.
- Do not commit build artifacts.
