# gilmartelles.github.io

Personal portfolio website for Gilmar Telles, hosted on GitHub Pages.

**Live site:** [gilmartelles.com](https://gilmartelles.com)

## Architecture

```
├── index.html      # Main portfolio (bilingual markup)
├── styles.css      # Design system (OKLCH colors, light/dark themes)
├── theme.js        # Theme toggle (light ↔ dark) + localStorage
├── lang.js         # Language toggle (EN ↔ PT-BR) + localStorage
├── main.js         # Tabs, hamburger menu, scroll reveal, header behavior
├── images/
│   └── headshot.png
├── .nojekyll       # Bypasses Jekyll processing
├── .impeccable.md  # Design context
└── CNAME           # Custom domain config
```

## Features

- **Bilingual**: EN / PT-BR toggle (single page, JS-based, persisted via localStorage)
- **Dark/Light theme**: Toggle with system preference detection, persisted via localStorage
- **Responsive**: Mobile-first with hamburger menu on small screens
- **Sections**: Hero, About, Services, Skills, Projects, Experience (tabbed), Education, Contact
- **Design**: Bricolage Grotesque + Libre Franklin typography, OKLCH color system, editorial layout

## Development

Open `index.html` in a browser. No build tools required — pure HTML/CSS/JS.

## Deployment

Push to `main` branch. GitHub Pages builds and deploys automatically.