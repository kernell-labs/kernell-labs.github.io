# Kernel Labs

Landing page for Kernel Labs — specialized models on proprietary data, deployed anywhere and owned by you.

Next.js App Router, static export, no dependencies beyond Next/React.

```bash
npm install
npm run dev
```

## Editing

- **Copy and content** — [app/data.js](app/data.js). Sectors, devices, deployment modes, pipeline configs, the brand accent, email and location all live there.
- **Markup and layout** — [app/page.jsx](app/page.jsx). Styles are the design's original CSS strings passed through a small `s()` parser, so declarations stay copy-pasteable from the source design.
- **Animations** — [app/globals.css](app/globals.css).

Run the style-parser self-check:

```bash
node test-style.mjs
```

## Deployment

Pushing to `main` builds and publishes to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml). Enable it once under **Settings → Pages → Source: GitHub Actions**.

`basePath` is set to `/kernel-labs` only on CI, so local dev stays at `/`. For a custom domain, drop the `basePath` line in [next.config.mjs](next.config.mjs) and add a `public/CNAME`.
