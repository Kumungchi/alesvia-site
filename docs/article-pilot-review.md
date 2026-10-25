# Article pilot — Impeccable review

Date: 2026-10-25. Surface mode: Read. Scope: typography and reading layout for one existing essay, with an isolated preview route. This extends the incumbent Alesvia identity; it does not replace the site design.

## Skill and direction

Applied [Impeccable](https://github.com/pbakaus/impeccable), version 4.7.1, installed in the local user skill directory. Read its context, typeset, craft-floor, Read guidance, and audit playbooks. The context explicitly permits a narrow refinement using the incumbent code when PRODUCT.md is missing. No new visual-world selection was needed for this already specified pilot.

An independent read-only typographic assessment found the original article used an approximately 800px column, 16px Inter body text at 26px leading, and a 48px Playfair title. The `.prose-alesvia` class had no associated measure rule. The pilot uses an article-only Newsreader option, retains Playfair + Inter as a working comparison, and leaves the original article route intact.

At Matias's request, the pilot was also compared with public Mobbin article galleries: mobile The Atlantic Magazine, web The New Yorker, and WSJ. Specific observations, rejected examples, and access limits are recorded in `docs/mobbin-article-references.md`. This is a follow-up design reference check; it does not retroactively attribute the original pilot to Mobbin or claim a new UI change.

## What is implemented

- `/cs/design-preview/article` and `/en/design-preview/article` reuse every body block of the existing `why-human-autonomy-must-be-the-baseline-for-ai` article. Text is identical between typeface options. The small editorial note links to the existing thesis and identifies the text as an essay, not original research.
- Six roles: title, deck, metadata, section heading, body, note. Desktop body is 20px with a column capped at 44rem and 68ch, mobile body 18px. Newsreader leading is 1.65; Inter leading is 1.75. Heading wrapping is balanced; prose uses pretty wrapping as progressive enhancement.
- Native radio controls compare Newsreader with the existing pairing. The labels are 44px high; arrow-key selection works. The interface needs no new dependency.
- On desktop, the note sits beside the opening paragraph. On mobile it follows that paragraph. A native fragment link focuses the note; a return link goes back to the reference. No hover-only interaction or popover library.
- Print rules remove navigation, controls, and footer; use A4 margins and print sizes; keep heading/paragraph pagination constraints; and print the absolute thesis URL. Newsreader is self-hosted through next/font only for this preview. The OFL license is included in `public/licenses/newsreader-OFL.txt`.
- Metadata is noindex/nofollow (including the Googlebot override); canonical points to the original article. The preview is absent from sitemap and the research feed. A production Vercel build returns notFound for this page. No public AI-creation credit is added.

## Evidence from the first browser pass

- Full Next build and TypeScript passed. Lint passed with six existing warnings (Policy Lab unused imports and generated Convex disable directives).
- Impeccable type scan of the original surface: `[]`. Full source scan of the new UI: `[]`. This is a deterministic result, not a claim that taste or all accessibility requirements have been proven.
- T3 Chromium preview checked CS at 1280px and 360px, EN at 1280px and emulated iPhone 12 Pro 390px. No horizontal overflow in checked layouts. The responsive note moved into flow.
- Native radio click and ArrowRight changed the selected face and computed font family. The note link changed focus to the note target.
- At 640px with root text size increased to 200%, CS content remained within the viewport. This is a text-scaling check, not a physical-device or browser-zoom certification.
- Computed heading contrast: 13.49:1; note text: 5.40:1 against the site background. This does not certify every existing site component.
- Print rules were inspected by applying their declarations in the same browser at an A4-equivalent content width. Navigation and controls disappeared, type sizes switched, and the thesis URL appeared. This caught two defects: a note return link remained visible due to specificity and a targeted note retained its focus outline. Both were corrected together.
- An automated comparison confirmed that every original article body block exists in the CS/EN prerendered preview; no source article copy was rewritten. The rendered note and UI labels are localized in dictionaries.
- Final confirmation after the print correction: both localized routes rebuilt successfully; the changed UI detector again returned `[]`. After loading the new stylesheet, the note return link was hidden and the targeted note had `outline: none` in the print-declaration check.

## Technical audit summary

Implementation integrity passes for the scoped pilot: consistent existing tokens, semantic article/aside, working controls, no cards, glass, gradients, ornamental section numbers, eyebrow above the title, or fake illustrations. The note's number is a working reference. The toolbar's label identifies an actual comparison tool, not a marketing kicker.

- Accessibility: **3/4**. Measured contrast and keyboard/fragment behavior; a screen-reader session and all zoom combinations remain untested.
- Performance: **3/4**. Route-scoped fonts, tiny stateful control and server-rendered article; no Lighthouse claim or field measurements.
- Theming: **3/4**. Existing light-theme tokens are reused. Dark mode is outside this pilot's existing visual contract and was not invented for it.
- Responsive: **3/4**. Checked desktop, mobile viewport and text scaling; no physical phone test.
- Implementation integrity: **4/4** for the scoped surface after verified source and browser checks.

Total: **16/20**, a scoped engineering assessment, not a WCAG certification. No blocking pilot defect remains in the checked paths. Actual PDF page breaks, OS print-dialog interaction, a physical mobile device, and a screen-reader pass still need manual review before broad rollout. The printed view was inspected; no browser-generated PDF is claimed as tested.

## Review boundary

This is a design pilot. The existing essay's factual and psychological claims have not been newly validated by this task. PR label: **čeká na kontrolu psychologem** for the reused article before final publication or broader rollout. Font selection remains Matias's decision; the site-wide font configuration stays as it was.

## Remote preview blocker

PR #8 is saved on GitHub. Vercel reported a failed deployment for the initial pilot commit: https://vercel.com/matias-projects-39de683d/alesvia-site/J1JqWidUMsegL7bChEBWE7Vr9E4o . The GitHub status only says the deployment failed. Reading its build log requires a Vercel login; neither the available browser profile nor CLI had one. The CLI login flow was cancelled. No cause has been verified, and no Vercel configuration, environment files, or Convex deployment was changed by this task. Matias was asked for the first redacted build error. The local build and functional browser checks above passed.
