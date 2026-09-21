# Portfolio

Vite + React + TypeScript + Tailwind v4, animated with Motion. Fonts are
self-hosted via Fontsource — no CDN or Google Fonts requests at runtime.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
```

## Editing

**All copy lives in `src/content.ts`.** Nothing else needs touching for routine
updates. Anything marked `TODO` there is placeholder text and must be replaced
before this goes anywhere public.

Your photo goes at `public/photo.jpg` — portrait, roughly 4:5, ~1200px wide.
Until that file exists the about section shows a framed monogram instead.

## Design

Palette and dark theme carry over from the Stitch project "Obsidian & Electric"
(see `../stitch-export/`), defined as Tailwind theme tokens in `src/index.css`.
Type is Space Grotesk (display) / Archivo (body) / JetBrains Mono (labels).

Contact is a `mailto:` link rather than the form in the Stitch mockup — a static
site has nowhere to POST it, and a form that silently drops messages is worse
than no form. If you want a real form, Formspree or a Vercel function will do it.

## Deploying

Static output, so anything works:

```bash
npx vercel deploy --prod          # or
npx netlify deploy --prod --dir=dist
```
