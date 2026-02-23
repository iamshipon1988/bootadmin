# Bootadmin

Bootadmin is an open source admin panel to help developers, designers, UX, and the rest of the world quickly create their projects without having to worry about styling. Powered by Bootstrap 5, it provides all of the platform's features in addition to the style and functions you see on Bootadmin.

Bootadmin contains a fully customizable interface with a great variety of layout options and resources. It is built with [Eleventy (11ty)](https://www.11ty.dev/) and uses partials/includes to make it easy to integrate into other platforms and languages. It is very easy to take Bootadmin and customize it for PHP, React, Angular, Ember.js, and more.

## Getting Started

```bash
npm install
npm start        # dev server at http://localhost:8080
npm run build    # production build → _site/
```

## Deploying to GitHub Pages

1. In your repo → **Settings** → **Pages**, set Source to **GitHub Actions**
2. Push to `master` — the included workflow builds and deploys automatically

## SCSS

The compiled CSS (`style/core/style.min.css`) is included in the repo. If you modify the SCSS source files, recompile with:

```bash
npm run build:css
```

To update the vendor CSS/JS bundles (Bootstrap, etc.) after changing package versions:

```bash
npm run build:vendor
```

## Library Versions

| Library | Version |
|---|---|
| Bootstrap | 5.3.x |
| jQuery | 3.7.1 |
| jQuery UI | 1.14.1 |
| Font Awesome | 6.7.x |

## Remove Buy Me a Coffee Button

Navigate to `_includes/_header.html` and before the `</head>` tag you will find the Buy Me a Coffee script. Remove it to disable the widget.

## Changelog

### v0.2.0
- Migrated static site generator from Jekyll to **Eleventy (11ty)** with Nunjucks templates
- Upgraded from Bootstrap 4 → **Bootstrap 5** (updated all data attributes, class names, and JS API)
- Updated jQuery 3.3.1 → 3.7.1, jQuery UI 1.12 → 1.14.1, Font Awesome 5 → 6
- Removed Popper.js (now bundled with Bootstrap 5)
- Added GitHub Actions workflow for automatic deployment to GitHub Pages
- Removed unused CSS/SCSS (cut ~1,000 lines of dead utility classes and Bootstrap 4-only overrides)

## Get Support or Request Updates

The best way to get help or request updates is to open an issue on GitHub. It may take some time to respond, but there are amazing folks around who may be able to help.
