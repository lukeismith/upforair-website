# Up For Air – website

Static marketing site for the Up For Air app, built with [Astro 7](https://astro.build).

The layout, styling and interactions are a hand-written port of the Framer
"Simplicity" template (the coral-company-068440.framer.app preview). Framer does
not expose source code, so the published page was reverse-engineered: fonts,
images, icons and copy were pulled from the published site, and the React /
Motion behaviour was rewritten as small vanilla scripts inside Astro components.

## Getting started

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/
npm run check    # type-checks .astro files
```

Requires Node 22.12 or newer.

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/site.ts` | Every string on the site (nav, hero, pricing, FAQ…). Edit copy here. |
| `src/styles/global.css` | Fonts, design tokens (colours, radii, spacing), typography and the scroll-in animation. |
| `src/layouts/Base.astro` | `<head>`, header, footer, and the appear-on-scroll bootstrap. |
| `src/components/` | One component per landing-page section, each with its own scoped CSS and script. |
| `src/components/icons/` | Logo, Apple glyph, star, check, and an SVG sprite of the illustration icons. |
| `src/assets/` | Avatars, gradient backgrounds, step illustrations and customer logos (processed by Astro's image pipeline). |
| `public/fonts/` | Self-hosted Satoshi and Instrument Serif. |
| `src/pages/` | `index`, `docs` (placeholder skeleton) and `404`. |

## Interactive pieces (and where the behaviour lives)

- **Hero headline** – word-by-word fade-in on load (`Hero.astro`).
- **Phone mock-up** – pointer-driven 3D tilt that settles when the cursor stops; disabled for touch and reduced-motion (`PhoneMockup.astro`).
- **Logo ticker** – CSS marquee, paused when off-screen (`LogoTicker.astro`).
- **Section pill nav** – appears on scroll, highlights the visible section, hides after 5 s idle (`SectionNav.astro`).
- **Features** – hover / tap a feature to switch the illustration state (`Features.astro`).
- **Pricing toggle** – monthly vs annual prices (`Pricing.astro`).
- **FAQ** – single-open accordion (`Faq.astro`).
- **Scroll-in reveals** – any element with `data-appear` (`src/scripts/appear.ts`).

## Before launch

- Change `brand.name`, `brand.downloadUrl` and the copy in `src/data/site.ts`.
- Set `site` in `astro.config.mjs` to the real domain.
- Point `footer.newsletter.action` at a form endpoint.
- Replace the placeholder avatars / customer logos or remove those sections.
