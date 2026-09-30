# Up For Air – website

Static marketing site for **Up For Air**, the iPhone app that locks your rabbit
holes and lets you earn the minutes that open them. Built with
[Astro 7](https://astro.build).

The page structure and interactions started as a port of the Framer "Simplicity"
template. The content, palette, type and artwork now follow the app itself: the
Almanac design (`design/up-for-air/1-almanac/DESIGN.md` in the app repo), the
app's string catalogs, its pricing configuration and its marketing lines.

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
| `src/data/site.ts` | Every string on the site (nav, hero, pricing, FAQ, help…). Edit copy here. Also the `launch` switch (see below). |
| `src/styles/global.css` | The design tokens: the template's black background and translucent cards blended with the Almanac palette (cream ink, apricot and terracotta), Fraunces and Instrument Sans, typography and the scroll-in animation. The site is dark only; the phone screen keeps the app's paper. |
| `src/layouts/Base.astro` | `<head>`, header, footer, and the appear-on-scroll bootstrap. |
| `src/components/` | One component per landing-page section, each with its own scoped CSS and script. |
| `src/components/icons/` | The bunny mark, the Apple glyph, a check, and `Pictograms.astro`, a sprite of the app's 32 pictograms. |
| `src/assets/art/` | The Almanac artwork copied from the app repo: plates, bunny poses, scenes, tiles, marks, the app icon. All of it is placeholder art until the illustrator's work lands. |
| `public/fonts/` | Fraunces and Instrument Sans (variable, latin subset, SIL OFL), subsetted from the files the app bundles. |
| `src/pages/` | `index`, `help` and `404`. |

## Interactive pieces (and where the behaviour lives)

- **Hero headline** – word-by-word fade-in on load (`Hero.astro`).
- **Phone mock-up** – the app's Home screen (plate, balance, ledger, tabs) inside a CSS phone with a pointer-driven tilt; disabled for touch and reduced-motion (`PhoneMockup.astro`).
- **Ledger ticker** – a slow marquee of "Your walk made 26 min." lines, paused off-screen (`Ticker.astro`).
- **Section pill nav** – appears on scroll, highlights the visible section, hides after 5 s idle (`SectionNav.astro`).
- **Features** – hover / tap a feature to switch between the rabbit holes, the ledger and the limit screen (`Features.astro`).
- **Guilt trip** – the bunny types a line; the two replies shuffle so you have to read them; "Another line" draws the next (`GuiltTrip.astro`).
- **Pricing toggle** – monthly vs yearly Premium, with the yearly trial note (`Pricing.astro`).
- **FAQ** – single-open accordion (`Faq.astro`).
- **Scroll-in reveals** – any element with `data-appear` (`src/scripts/appear.ts`).

## Launch switch

`launch.state` in `src/data/site.ts` is `'prelaunch'` today: the hero tag says
"Coming soon to the App Store" and every primary button scrolls to the newsletter
form. Set it to `'live'` and fill in `launch.appStoreUrl` once the app is in the
store; the buttons then get the Apple glyph and link out.

## Before launch

- Flip `launch.state` and set `launch.appStoreUrl`.
- Set `brand.contactEmail` and `site` in `astro.config.mjs` to the real values.
- Point `footer.newsletter.action` at a form endpoint.
- Swap the placeholder artwork in `src/assets/art/` for the illustrator's files (same names, same viewBoxes) and remove `footer.artNote`.
- Add a privacy policy page and link it from the footer (the app's draft is not final).
- Check prices against App Store Connect: the site shows $6.99 a month, $44.99 a year, and a 21-day trial on yearly.
