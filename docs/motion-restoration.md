# Restore the accepted motion language

Matias requested restoring the earlier animations on 26 October 2026 because the unified site felt less professional without them. This supersedes the static-connectors decision in the initial sitewide rollout.

## Motion plan

- Focal sequence: the existing motto entrance, followed by its supporting copy; the gold autonomy path draws into view as the reader reaches each section.
- Continuity: section content settles over 600 ms, page/article headers over 650 ms. Navigation menus and collaboration selections use 240–300 ms transitions. Article body paragraphs remain stationary.
- Feedback: navigation underlines grow in gold; existing button colors remain unchanged and arrow icons move 3 px on hover. No hover lift or elastic easing.
- Budget: CSS plus native Web Animations, one IntersectionObserver per route, no new dependency, no per-frame scroll handlers or looping effects. Each section runs once. Effects use transform/opacity; the connector uses scaleY. Streamed route content is discovered through one child-list MutationObserver, with cleanup on navigation.

## Fallbacks and validation

Server HTML and default CSS keep all content visible. Only offscreen gold connectors are armed after JavaScript initializes; content is never hidden waiting for a scroll observer. Reduced motion skips Web Animations and CSS entrances. Changing the OS preference while motion is active cancels running effects and completes pending connectors. Print rules keep content fully opaque and untransformed.

- Full Next build passed: 53 generated routes; TypeScript passed.
- ESLint: no errors, four existing generated-code warnings.
- One detector pass over changed UI: no findings.
- T3 browser: observed connector transitions and native section animations during desktop scrolling; mobile About entrance and connectors, no horizontal overflow at 390 px; menu Escape closes and returns focus. Article header participates; article body has zero animations.
- A short T3 browser recording captures the restored sequence. A frame was inspected for layout and text stability; this is not a hardware performance benchmark.
- Chrome CDP emulation (same mechanism as the existing responsive audit): reduced-motion load has zero pending sections and zero running animations; switching the preference mid-animation cancels all running effects and clears pending sections.
- JavaScript disabled: the English homepage retains all six sections, zero hidden sections and zero pending motion states.

Preview /cs, /en, /cs/o-nas and a research article; scroll through the homepage and switch collaboration paths. The change does not edit content, colors, backend behavior, deployment settings or data. Physical-device performance is not independently certified.

## Horizontal rule clarification

Matias specifically called out the previous horizontal lines progressively filling with color. Homepage topic/project/post dividers and research/process rows now draw a 1px gold overlay left-to-right over 1100 ms. They share the existing observer and do not translate their content. The original site's top reading-progress line is restored as a solid brand-gold 2px indicator, with one requestAnimationFrame-throttled passive scroll handler and a ResizeObserver for changing document length. Both clean up on navigation.

Browser measurements confirmed a divider at scaleX .516 mid-transition and 1 at completion; reading progress was 0 at the top, .152 partway and 1 at the bottom. Mobile 390px has no horizontal overflow. Reduced-motion emulation hides the top indicator and leaves zero running animations/pending targets; live preference changes cancel motion. Disabled JavaScript preserves the baseline dividers and all content. Build and lint passed; the targeted detector reported no findings.

The individual topic and FAQ bottom dividers also participate. A 1px noninteractive, aria-hidden marker observes the actual rule boundary so long blocks do not finish the effect before their bottom line enters the screen. Markers are removed on route cleanup or reduced-motion changes. Verified on mobile: pending → .650 fill → full width, with 21 horizontal rules on the homepage and no overflow; reduced-motion/no-JavaScript checks passed again after this refinement.
