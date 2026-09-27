# gilmartelles.github.io

Personal portfolio website for Gilmar Telles, hosted on GitHub Pages.

**Live site:** [gilmartelles.com](https://gilmartelles.com)

## Architecture

```
├── index.html      # The whole site: one bilingual page
├── styles.css      # Light-only design system, system font stack, responsive layout
├── lang.js         # EN ↔ PT-BR toggle and translations, persisted via localStorage
├── main.js         # Minimal stub for future enhancements
├── images/
│   └── headshot.png
├── .nojekyll       # Bypasses Jekyll processing
└── CNAME           # Custom domain config
```

## Features

- **Bilingual:** EN / PT-BR toggle, persisted via localStorage
- **Light-only:** no theme toggle, by design
- **Sections:** profile header, timeline, projects, what I work on, tools, contact
- **No dependencies:** plain HTML, CSS, and JS with no build step

## Development

```bash
python3 -m http.server 4173
```

Then visit http://localhost:4173.

## Deployment

Push to `main`. GitHub Pages serves the files directly.
