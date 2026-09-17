# VaijanathR.github.io

Personal website for Vaijanath Ruge, deployed on GitHub Pages.

Live at: https://VaijanathR.github.io

## Structure

- `index.html` — page markup (About, Resume, Projects, Contact)
- `css/style.css` — styling, light/dark theme via CSS variables
- `js/script.js` — theme toggle + footer year
- `.nojekyll` — tells GitHub Pages to serve files as-is (skip Jekyll processing)

## Editing

Sections still holding placeholder content are marked with `data-placeholder`
attributes and inline comments in `index.html` — search for `placeholder` to
find them (resume experience entries, LinkedIn link, résumé PDF).

## Deploying

This is a plain static site. Pushing to `main` is enough — GitHub Pages is
configured to serve directly from the `main` branch root.

```bash
git add -A
git commit -m "Update site"
git push
```
