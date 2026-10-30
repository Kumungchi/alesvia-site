# Homepage — scoped implementation evidence

Recorded 25 October 2026 after the supplied finish-review disposition **ship for SCOPED HOMEPAGE PROPOSAL**. This records the proposal's implementation, not global identity approval or permission to merge. The direction explicitly reserves evaluation of other pages and merge to Matias ([direction](homepage-direction.md), lines 3, 9, 13; [HANDOFF](../HANDOFF.md), final homepage backlog entry).

## Authority and documentation boundary

The Impeccable context scan found an incumbent implementation and no PRODUCT.md or DESIGN.md (`SCOPED_EXISTING_ALLOWED`, `EXISTING_VISUAL_SYSTEM`). Missing documentation does not establish a new visual world. This pass uses the extraction method in [Impeccable document.md](C:/Users/Matias/.codex/skills/impeccable/reference/document.md), under the explicit task boundary: evidence belongs only in this file. No product interview, invented product truth, global DESIGN.md, or `.impeccable/design.json` is part of this outcome.

The existing logo, palette, routes and truth constraints remain authoritative for this extension. Newsreader on the homepage is a scoped proposal; approval to use it on published articles is separately recorded in HANDOFF and does not approve every page. The global font mapping remains Inter + Playfair Display ([direction](homepage-direction.md), lines 3–9, 13; [HANDOFF](../HANDOFF.md), final article and homepage entries; [layout](../app/[lang]/layout.tsx), lines 13–14, 85; [global CSS](../app/globals.css), lines 15–19).

## Existing token evidence and implementation roles

These are existing `@theme` values, not newly approved tokens. Values come from [app/globals.css](../app/globals.css), lines 3–12; assignments come from [homepage CSS](../components/home/home.module.css), lines 6–48, and the layout body at line 85.

| Existing token | Actual value | Observed homepage role |
| --- | --- | --- |
| `--color-alesvia-bg` | `#F9F9F8` | Ground inherited from the layout body; primary action text. |
| `--color-alesvia-primary` | `#31263E` | Hero and section headings; primary action fill. |
| `--color-alesvia-text` | `#221E22` | Homepage text, inherited by unoverridden titles and prose. |
| `--color-alesvia-muted` | `#6B6472` | Planned status, secondary descriptions, excerpts, dates and thin rules. |
| `--color-alesvia-trust` | `#0F2C59` | Active Unplugged status; link hover; primary action hover fill. |

Gold is also incumbent: `--color-alesvia-accent: #ECA72C` supplies global keyboard focus and selection, while `--color-alesvia-accent-ink: #9A6200` appears in the retained crisis component's hover classes. These are inherited details, not a new homepage palette. Other defined colors are surface `#F4F4F2` and white `#FFFFFF`; the homepage module does not directly reference them ([global CSS](../app/globals.css), lines 9–12, 35–42; [CrisisSupport](../components/CrisisSupport.tsx)).

The existing logo has its own literal colors: BrandMark defaults to `#16324F` ink and `#C79B3B` accent, and BrandLogo text defaults to `#16324F`. Do not conflate those literals with the CSS trust/gold tokens or recolor the logo to reconcile them. Navbar retains BrandLogo and a `font-serif` wordmark ([BrandMark](../components/BrandMark.tsx); [Navbar](../components/Navbar.tsx), lines 30–35; [direction](homepage-direction.md), lines 3, 13).

## Typography and role mapping

Scoped Newsreader 400/500/600, Latin + Latin-ext, `display: 'swap'`, is instantiated as `const newsreader` in [page.tsx](../app/[lang]/page.tsx), line 11. Its variable `--font-newsreader` is attached only to the homepage wrapper at line 24; the module maps `--home-display` to `var(--font-newsreader), Georgia, serif` at line 2. “Scoped Newsreader” describes the boundary; there is no identifier named `scopedNewsreader` in this file.

| Role | Implemented mapping |
| --- | --- |
| Hero title | Newsreader 400, 3rem mobile; at 48rem and above, `clamp(4rem, 7.5vw, 6rem)`; line-height 1, maximum width 12ch. |
| Section titles | Newsreader 500, 2rem mobile / 2.75rem desktop, line-height 1.12. |
| Active project title | Newsreader 500, 3rem mobile / 4rem desktop. |
| Planned pillar titles | Newsreader 500, 2rem. |
| Writing titles | Newsreader 500, 1.75rem mobile / 2.25rem desktop. |
| Crisis section title | Scoped `.support h2` overrides the component's global serif family and bold weight with Newsreader 500. |
| Status, prose, metadata, action links and controls | Inherit Inter from the layout's `font-sans`; no Newsreader family is assigned to these roles. FAQ summaries remain Inter 500. |

Sources: [homepage CSS](../components/home/home.module.css), lines 11–50, 54–63; [layout](../app/[lang]/layout.tsx), lines 13–14, 85; [global CSS](../app/globals.css), lines 16–19. Weight 600 is configured for Newsreader but no explicit homepage title rule uses it. Primary actions use 600 in inherited Inter. Links inside pillar/writing headings inherit Newsreader from those headings; “links remain Inter” applies to action, utility and prose links, not linked titles. Global `--font-serif` still maps to Playfair Display; the scoped family does not replace it.

## Comparison with the direction contract

This is a source comparison, not a new rendered, accessibility or performance review. The contract is [homepage-direction.md](homepage-direction.md), especially lines 5–9 and 13.

| Contract | Implementation evidence and result |
| --- | --- |
| Explanatory hero and thesis action | `dict.hero.title`, existing metadata description, thesis route and initiatives anchor in page lines 25–32; asymmetric desktop columns in CSS line 53. Matches the specified structure. |
| Active Unplugged with real screenshot | Separate active-status feature links to `https://www.unplugged.cz`, using `/previews/unplugged-home.png` through Image at page lines 38–49. Matches the asset reference; this pass did not independently verify screenshot provenance or freshness. |
| Three restrained planned rows | Academy, Practitioners and Policy Lab are mapped to ruled list rows with incubating status; Academy uses `dict.academy.subtitle` (page lines 17–21, 51–64; CSS lines 28–33, 59–61). Matches. |
| Existing published writing | Page lines 73–77 select two posts and existing localized title/excerpt/date. `getAllPosts` filters drafts and sorts newest first ([posts.ts](../content/research/posts.ts), lines 646–647). Matches selection behavior; this does not revalidate article claims. |
| Quiet funding, native FAQ, retained crisis resources | Page lines 83–106 retain funding/contact routes, native details/summary, CrisisSupport and FAQ JSON-LD; CSS lines 41–50 use rules and spacing. Matches. |
| Existing colors; titles in Newsreader, explanation/controls in Inter | Token and role mappings above match. Hero sizes are 48px mobile and up to 96px desktop at a 16px root size. Newsreader 600 is loaded but unused by explicit title rules. |
| Open margins, rules, asymmetry; mobile reading order | 80rem maximum container, 1.5rem mobile / 3rem desktop inline padding; one-column flow becomes asymmetric grids at 48rem. Essays become two columns, not a card component grid (CSS lines 3–5, 10, 21, 29, 36–48, 51–65). Source structure matches; rendered overflow/wrapping was not checked here. |
| No added animation, gradients, glass or card grid | The homepage module declares no animation, transition, gradient, backdrop filter or shadow. FAQ icon changes rotation on open. Existing global smooth scrolling, focus and reduced-motion rules remain (CSS lines 45–47; global CSS lines 29–42, 89–97). Matches the scoped “no added” contract, not a claim that the entire site has no motion. |
| Recognizable header/footer; no global rollout | Navbar/Footer are rendered by the unchanged shared layout outside the homepage variable wrapper (layout lines 128–132; page line 24). Global font mappings remain as documented above. |

## Preexisting mismatch for parent attention

HANDOFF section 10 still states a red brand (`#DC2626`, `#F9F7F2`, `#030712`; Inter + Playfair Display), while current global code uses plum/blue/gold and the homepage direction explicitly preserves the five current colors listed above. The logo additionally retains its separate blue/gold literals. This is a preexisting documentation/code discrepancy, not evidence that a global rebrand was approved ([HANDOFF](../HANDOFF.md), line 168; [global CSS](../app/globals.css), lines 4–12; [BrandMark](../components/BrandMark.tsx); [direction](homepage-direction.md), lines 3, 9).

Parent disposition: retain the current proposal boundary and surface the discrepancy for later authoritative reconciliation. This pass does not repair HANDOFF, tokens or logo. No structural contradiction with the scoped direction was found in the inspected source; the unused Newsreader 600 weight and linked-title exception are implementation details to retain in any subsequent summary. Legal, clinical and source-verification blockers remain those already recorded in HANDOFF; design disposition does not clear them ([direction](homepage-direction.md), line 13).

## Documentation outcome

Only `docs/homepage-design-notes.md` was authored by this pass. No UI, global identity files, handoff, build, git, PR or browser operations were performed. Evidence is limited to the inspected source and the supplied review disposition; no deployment, human identity approval or fresh visual validation is claimed. This scoped record completes documentation of the proposal without promoting homepage choices into a global design system.
