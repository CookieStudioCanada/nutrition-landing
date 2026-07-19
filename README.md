# Nutrition Landing Page

Marketing site for the **Nutrition** iOS app by Cookie Technologies Canada.

## Live site

Published via [GitHub Pages](https://pages.github.com/) on push to `main`:

**https://cookiestudiocanada.github.io/nutrition-landing/**

French: **https://cookiestudiocanada.github.io/nutrition-landing/?lang=fr**

## Features

- Bilingual EN/FR (Canada) with browser detection and manual toggle
- Locale-aware links (`?lang=fr`) shared across all pages
- Legal pages: Privacy Policy, Terms of Service, Help Center
- App Store badge (coming soon) and email waitlist signup

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

## Deployment

GitHub Actions workflow `.github/workflows/pages.yml` deploys the static site automatically when changes are pushed to `main`.

Ensure **Settings → Pages → Build and deployment** is set to **GitHub Actions**.
