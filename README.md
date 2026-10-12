# Up For Air – website

Static marketing site for **Up For Air**, the iPhone and iPad app that locks your
rabbit holes and lets you earn the minutes that open them. Built with
[Astro 7](https://astro.build).

The page structure and interactions started as a port of the Framer "Simplicity"
template. The content, palette, type and artwork now follow the app itself. In the
app repo, `design/up-for-air/reference/` is the as-built reference: its
`marketing/facts.md` is the source for every fact, number and voice rule on this
site, its `marketing/` folder holds the screenshots, icons and social image, and its
`assets/` folder holds the art the app ships. Where a screenshot and `facts.md`
disagree, `facts.md` is right.

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
| `src/data/site.ts` | Every string on the site (nav, hero, pricing, FAQ, help, alt text, the Guilt trip lines…). Edit copy here, following `facts.md` and the voice rules in its header comment. Also the `launch` switch (see below). |
| `src/styles/global.css` | The design tokens: the template's black background and translucent cards blended with the Almanac palette (cream ink, apricot and terracotta), Fraunces and Instrument Sans, typography and the scroll-in animation. The site is dark only; the app screens keep the app's paper. |
| `src/layouts/Base.astro` | `<head>` (favicons, web manifest, Open Graph and Twitter tags with absolute URLs from `site`), header, footer, and the appear-on-scroll bootstrap. |
| `src/components/` | One component per landing-page section, each with its own scoped CSS and script. |
| `src/components/icons/` | The bunny mark (the app's head-out mark as four ellipses, the favicon's geometry), the Apple glyph, a check, and `Pictograms.astro`, a sprite of the app's 32 pictograms (path for path the same as the app's). |
| `src/assets/screens/` | Simulator captures from the marketing kit, served through `astro:assets` as WebP at several widths: `home-day-light.png` (the hero phone), and two crops taken from the top of a capture, `earn-light-top.png` (down to the Daily cap) and `unlock-limit-15-light-top.png` (down to the note under the quick picks). |
| `src/assets/art/` | The app's current art, copied by name from `design/up-for-air/reference/assets/` in the app repo: plates, bunny poses, scenes, tiles, marks, icons and the checkpoint card. The bunny is Vecteezy stock art and the landscapes are generated; all of it is placeholder art until the illustrator's work lands. |
| `public/` | `favicon.svg` and `favicon-32.png` (a simplified mark with no stock art), `apple-touch-icon.png`, `icon-192.png` and `icon-512.png` (listed in `site.webmanifest`), `og.png` (the 1200 × 630 social image), and `fonts/`: Fraunces and Instrument Sans (variable, latin subset, SIL OFL), subsetted from the files the app bundles. |
| `src/pages/` | `index`, `help` and `404`. |

## Interactive pieces (and where the behaviour lives)

- **Hero headline** – word-by-word fade-in on load (`Hero.astro`).
- **Phone mock-up** – a real capture of the app's Home screen inside a CSS phone, at the capture's exact proportions, with a pointer-driven tilt; the tilt is off for touch and reduced motion (`PhoneMockup.astro`).
- **Ledger ticker** – a slow marquee of "Your walk earned 6 min." lines at the default rates, paused off-screen (`Ticker.astro`).
- **Section pill nav** – appears on scroll, highlights the visible section, hides after 5 s idle (`SectionNav.astro`).
- **Features** – hover / tap a feature to switch between three app screens: the Rabbit holes page (an HTML replica drawn at the captures' scale, because the simulator has no Screen Time), the Earn tab and the screen that asks how long (both real captures) (`Features.astro`).
- **Guilt trip** – the app's seventeen lines, with the time-of-day lines only at their time of day, dealt from a shuffled deck. The line types at 30 characters a second, then the two replies fade in and type in a random order, and you choose one by holding it for three seconds, as in the app. A screen reader can choose with one activation. "Another line" deals the next (`GuiltTrip.astro`).
- **Pricing toggle** – monthly vs yearly Premium, with the yearly trial note (`Pricing.astro`).
- **FAQ** – single-open accordion (`Faq.astro`).
- **Scroll-in reveals** – any element with `data-appear` (`src/scripts/appear.ts`).

## Launch switch

`launch.state` in `src/data/site.ts` is `'prelaunch'` today: the hero tag says
"Coming soon to the App Store" and every primary button scrolls to the newsletter
form. Set it to `'live'` and fill in `launch.appStoreUrl` once the app is in the
store; the buttons then get the Apple glyph and link out, and the meta description
says "Free on the App Store".

## Before launch

- Flip `launch.state` and set `launch.appStoreUrl`.
- Set `brand.contactEmail` and `site` in `astro.config.mjs` to the real values. The social image and canonical URLs are built from `site`.
- Point `footer.newsletter.action` at a form endpoint.
- Add a privacy policy page and link it from the footer (the app's draft is not final).
- Check prices against App Store Connect: the site shows $6.99 a month, $44.99 a year (shown as $3.75 a month and "Save 46%"), and a 21-day trial on yearly only. These come from the app's local StoreKit file.
- Make sure the trial reminder ships. The site says that the app reminds you before the free trial ends (`pricing`, the FAQ and the help page), and it names no number of days, because the trial length can change. The trial length and the prices are one constant each at the top of `site.ts`.
- The site says "iPhone and iPad" and "iOS 18 or iPadOS 18 or later" (Luke, 2026-10-11). An iPad cannot read NFC, so the help page says that checkpoint tags need an iPhone and that a printed card works on both. Test the app on an iPad before launch.
- Keep every screenshot on a Premium account. The site describes every feature as part of the app, keeps the differences between Free and Premium in the pricing cards, and says "Screenshots show Up For Air Premium." in the footer (`footer.screenshotNote`). The Earn capture is still a Free one (Zones reads "Part of Premium"), so replace it with a Premium capture and rewrite its alt text.
- Confirm the Vecteezy licence for the stock bunnies (file 59868990). Under the Free licence the footer credit ("Bunny illustrations from Vecteezy.com", `footer.artCredit`) must stay; under the Pro licence it may go.
- Swap the placeholder artwork in `src/assets/art/` for the illustrator's files (same names, same viewBoxes), then remove `footer.artNote` and, if no stock art is left, `footer.artCredit`.
- Retake the screenshots once the build has the current wording. The captures predate the "earned" copy, so Home still reads "Made today" and the Earn plate "Sunday · Made today". Replace `home-day-light.png`, `earn-light-top.png` and `unlock-limit-15-light-top.png` with the same names (the crops are cut from the top of the capture with no other change), update the alt text in `site.ts`, and render `public/og.png` again from the kit if Home changed.
- Replace the Rabbit holes replica with a capture from a phone (the simulator cannot show locked apps), cropped the same way as the other two panels.
