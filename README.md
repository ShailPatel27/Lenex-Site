# Code Insights Website

Companion website for **Code Insights by Lenex**, built for `lenex.dev`.

The site presents Code Insights as an editor-native VS Code extension for understanding Python behavior, side effects, return values, and practical code traps without leaving the workspace.

## Tech Stack

- Vite
- React
- TypeScript
- Plain CSS
- lucide-react icons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

Site-wide URLs live in `.env` so they can be changed in one place:

```env
VITE_SITE_URL=https://lenex.dev
VITE_MARKETPLACE_URL=https://marketplace.visualstudio.com/items?itemName=Lenex.code-insights
```

For local-only overrides, create `.env.local`. It is ignored by Git.

## Assets

Public images live in `public/images`.

Current important assets:

- `lenex-logo-without-name-transparent.png`
- `lenex-full-logo-transparent.png`
- `hover-insight.png`
- `learn-panel.png`
- `figma-workspace-1.png`
- `figma-workspace-2.png`

The site uses real extension and concept visuals rather than generic stock imagery.

## Deployment

This is a static Vite site. It can be deployed to Vercel, Netlify, GitHub Pages, or any static host.

Production output is generated in `dist/` after:

```bash
npm run build
```
