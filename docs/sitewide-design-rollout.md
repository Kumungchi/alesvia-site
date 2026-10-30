# Sitewide implementation of the accepted homepage

Date: 26 October 2026. Matias confirmed that the refined homepage worked well on mobile and asked for the same visual language across articles and the rest of the website.

## Scope and decisions

This implements the accepted prototype in Next.js for Czech and English. It preserves the original SVG logo and the plum / white / gold button roles. Header, footer, page introductions, section headings, forms, pillar pages, legal pages, research index and published articles now share Figtree/Literata, page gutters and a central composition. Long text remains left-aligned within centered reading columns.

The home page keeps the three-line motto, four themes, real Unplugged screenshot, clear preparation statuses, published article links, navy collaboration selector, FAQ and crisis contacts. Current prototype copy is in dictionaries in both languages. The original English motto remains “Human autonomy is the baseline.” Existing article bodies, sources and all institutional/legal copy are retained. The prototype's FAQ is adapted into English; structured FAQ data uses those same visible strings.

The Policy Lab process uses a single ordered list instead of alternating duplicated desktop/mobile content. Existing content and sequence are preserved. Static section connectors provide the accepted visual motif without adding a scroll observer to each page. The homepage has the single entrance animation; reduced motion disables it.

Mobbin influence is inherited from the accepted prototype and the documented Titan/ISO Meet research in `design-proposals/README.md`. This pass did not claim new access to paid Mobbin screens or copy third-party assets.

## Validation

- Full Next.js production build: 53 generated routes; TypeScript passed.
- ESLint: zero errors; four existing generated Convex warnings (the two unused Policy Lab imports were removed).
- One Impeccable detector pass over changed shared UI/CSS: no findings.
- Production browser audit: all 40 sitemap URLs, CS and EN, rendered at 320, 390, 768, 1024, 1440 and 2560 px: 240 checks with no document overflow, missing H1, off-center H1, or undersized shared navigation/button/footer targets.
- Visually inspected homepage, About and article layouts on desktop/mobile, plus mobile contact form. Header, logo and actual fonts loaded.
- Native mobile dialog: focus starts on Close, Escape closes it, focus returns to Menu, scroll lock is restored. Switching language from the menu keeps the same article.
- Desktop project navigation: Escape closes and returns focus to its summary.
- Collaboration selector changes the description and CTA destination; supporter CTA routes to localized funding and retains the gold fill.
- Contact required fields retain labels and at least 48 px height; submit is plum. No form was submitted and no production record was written.
- Public routes, localized article destinations, canonical tags, sitemap and structured data remain part of the existing routing system. Article bodies and draft filters were not edited.

The first local development server run encountered a Next development manifest/cache error while loading multiple routes. That run is not treated as successful verification. Final layout checks used a fresh successful production build served by `next start`.

## Preview paths

Compare `/cs` and `/en`, then `/cs/o-nas`, `/cs/iniciativy/akademie`, `/cs/iniciativy/policy-lab`, `/cs/kontakt`, `/cs/vyzkum` and an article, with their English equivalents. Legal pages and funding use the same shared shell.

## Limits

This is visual and interaction verification in desktop Chromium with resized viewports, not a claim of all-browser or physical-device certification. Lighthouse, real email delivery, PDF pagination and production privacy completion are separate checks. Forms and backend delivery behavior are preserved. Unresolved controller/SMTP/DPA decisions remain in HANDOFF A-04. Existing psychological content still awaits human review; this rollout does not approve it for final publication. Merge remains with Matias.
