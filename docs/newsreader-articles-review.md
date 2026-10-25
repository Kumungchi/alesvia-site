# Newsreader article rollout

Matias selected Newsreader after reviewing the working article pilot and approved applying the reading layout to published articles. This change targets article detail pages only, not the research index, homepage, or global font system.

The article title (40/64px, weight 500), deck (22/24px), and prose (18/20px, leading 1.65, maximum 68ch) use route-scoped Newsreader. Inter remains the metadata/navigation face. `next/font` serves the selected 400/500/600 latin and latin-ext assets locally with swap; the existing Newsreader OFL license remains in `public/licenses/`. The comparison controls and example margin note remain confined to the pilot.

Lists now use semantic `ul > li` instead of uncontained list items and decorative bullet spans. The source copy, publication dates, tags, draft filters, article metadata and JSON-LD are unchanged. This is a presentation change; existing psychological claims still await human review, not a newly completed fact-check.

Validation:

- Full `npm run build` and TypeScript passed.
- `npm run lint`: zero errors, six existing warnings in Policy Lab/generated Convex files.
- Impeccable typography detector: no findings on the changed files.
- All five published posts in both languages returned HTTP 200. Each non-empty source line, after removing its Markdown markers, was present in the server-rendered body; canonical and JSON-LD existed in all ten responses.
- T3 Chromium: CS autonomy article and EN interpretability article viewed at desktop 1280px and mobile 360px. Computed Newsreader, 20px desktop / 18px mobile, no horizontal overflow. EN at 200% root text size also had no horizontal overflow.
- Applied the built print declarations in-browser: title 28pt, prose 11pt, navigation hidden and article header retained. Actual browser PDF pagination and physical print output still require manual review.

Review paths (the CS canonical path is localized by the existing routing):

- `/cs/vyzkum/proc-musi-byt-lidska-autonomie-zakladem-pro-ai`
- `/en/research/why-this-interpretability-research-matters-for-ai-governance`

No Convex functions, schema, remote settings, environment files or production data changed.
