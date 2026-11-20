# Kernel Labs

Landing page for Kernel Labs — specialized models on proprietary data, deployed anywhere and owned by you.

Next.js App Router, TypeScript, static export, no runtime dependencies beyond Next/React.

```bash
npm install
npm run dev
```

## Editing

- **Copy and content** — [app/data.ts](app/data.ts). Sectors, devices, deployment modes, pipeline configs, the brand accent, email and location all live there, with the shapes typed.
- **Markup and layout** — [app/page.tsx](app/page.tsx).
- **Helpers** — [app/style.ts](app/style.ts). `s()` parses the design's original CSS declaration strings into typed `CSSProperties`, so styles stay copy-pasteable from the source design instead of hand-camelCased.
- **Animations** — [app/globals.css](app/globals.css).

```bash
npm test        # asserts the CSS parser and accent shading
npm run typecheck
```

## Deployment

Pushing to `main` builds and publishes to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml). Enable it once under **Settings → Pages → Source: GitHub Actions**.

Lives at <https://kernell-labs.github.io> — an org site, served at the root, so no `basePath`. For a custom domain later, add `public/CNAME` containing the bare domain.
