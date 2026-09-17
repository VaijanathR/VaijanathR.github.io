# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal website (no build step, no dependencies) for Vaijanath Ruge, deployed on GitHub Pages
as a user site at `github.com/VaijanathR/VaijanathR.github.io`, live at https://vaijanathr.github.io/.
GitHub Pages serves directly from the `main` branch root — `.nojekyll` disables Jekyll processing so
files are served as-is.

## Structure

- `index.html` — single-page markup: About, Resume (experience/education timeline), Projects, Contact
- `css/style.css` — all styling; theming is done via CSS custom properties on `:root`, with a dark-mode
  override under `:root[data-theme="dark"]` and a `prefers-color-scheme: dark` media query fallback
- `js/script.js` — vanilla JS, no dependencies: light/dark theme toggle (persisted to `localStorage`
  under the `theme` key) and the footer copyright year
- `resume.pdf` — intentionally **not tracked** (gitignored). It contains a personal phone number and
  photo; do not commit it or reference it from HTML unless the user explicitly asks to publish it

## Editing content

Several sections still hold placeholder content, marked with `data-placeholder` attributes / a
`placeholder-*` CSS class in `index.html` (resume experience entries beyond the IISc coursework line,
education before it, the LinkedIn link, and the résumé PDF download). Search `index.html` for
`placeholder` to find them before assuming a section's content is final/real.

Projects listed in `index.html` are the user's real public GitHub repos (`agentic-qe`,
`agentic-qe-mvp2`, `agentic-qe-mvp3`) — when adding/removing project cards, verify the link actually
resolves (`curl -s -o /dev/null -w "%{http_code}" <url>` should return 200) rather than inventing one.

## Deploying

No build step — pushing to `main` deploys:

```bash
git add -A
git commit -m "Update site"
git push
```

GitHub Pages auto-builds on push; check status with:

```bash
gh api repos/VaijanathR/VaijanathR.github.io/pages --jq .status
```

## Related

`../CH3Build2` is a second, independent site for the same person (different repo, different design
constraints — dark background, single accent color, spec-driven content sourced from `resume.pdf` /
`projects.md`). The two are not linked to each other and should be edited independently.
