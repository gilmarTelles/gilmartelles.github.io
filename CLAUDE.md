# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Gilmar Telles, hosted on GitHub Pages at gilmartelles.com. Uses Jekyll with the `jekyll-theme-minimal` theme.

## Development

**Local preview:**
```bash
bundle install
bundle exec jekyll serve
```
Then visit http://localhost:4000

**Deployment:** Push to `main` branch. GitHub Pages automatically builds and deploys.

## Architecture

- `README.md` - Main content file; Jekyll converts this to the homepage
- `_config.yml` - Jekyll configuration (title, logo, theme)
- `CNAME` - Custom domain configuration
- `images/` - Static assets (headshot photo)

The site relies entirely on GitHub Pages' built-in Jekyll processing. No local build artifacts are committed.
