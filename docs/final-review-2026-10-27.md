# Final review — 27 October 2026

## Outcome

The owner approved the current design and animations. The final technical check is complete, and the reproducible functional failures below are fixed. **Production release is on hold** for the unresolved items in the release checklist. Passing a build or approving the appearance does not resolve those items.

Review candidate: branch `release/site-final-review`, based on the complete approved result in `feat/restore-brand-motion` (`550896b`). The aggregate PR targets `master` directly. Earlier PRs #1–17 are a chain of incremental proposals/changes; merging #17 into #16 alone does not release the website.

## Findings corrected during this review

| Priority | Finding and impact | Resolution |
| --- | --- | --- |
| P1 | Locale proxy redirected POST `/api/contact` to `/cs/api/contact`, which returned 404. Email requests never reached the actual handler. | Exclude API paths from locale routing, with boundary-aware matcher tests. Preserve ordinary locale redirects. |
| P1 | All three forms treated HTTP 400/500/503 as success after the database call. Users could be told a message was sent when email delivery failed. | Shared submission helper requires HTTP success and `{ok:true}`. Failure retains the draft and displays a translated error. Contact no longer silently resets the draft and attempts an automatic mail-client fallback. |
| P2 | User-supplied name/email were interpolated as raw HTML in the notification template. | Escape name, email and message; cover special characters with a unit test. |
| P2 | Footer, pillar and some subpage headings skipped heading levels. | Correct heading elements while preserving their appearance; Lighthouse accessibility rose from 98 to 100 on the homepage. |
| P2 | Generated `/icon` and `/apple-icon` endpoints were also subject to locale redirects. | Exclude them from the proxy; both now return 200. |

No schema or Convex function changes, migrations, environment changes, production writes or real email sends were performed. The shared frontend save still precedes the email notification; a failed notification can leave a saved database record. Retrying can therefore create another record. This review does not introduce cross-system transactions or claim exactly-once delivery.

## Verification

- `npm run build`: successful; 53 generated routes, TypeScript passed.
- `npm run lint`: zero errors, four existing warnings in generated Convex files.
- `node --experimental-strip-types --test scripts/contact-submission.test.mjs scripts/proxy-matcher.test.mjs scripts/vercel-build.test.mjs`: **13 passing tests**. All persistence, network and delivery responses in these tests are mocks; no production records are created.
- Proxy matcher tests use this installed Next build's actual experimental matching helper and the actual exported config. They cover API endpoints, generated icons, static assets, public pages and lookalike prefixes such as `/apiary`.
- Browser audit: **40 public sitemap URLs × 6 widths (320, 390, 768, 1024, 1440, 2560) = 240 checks**, no document overflow. Every page returns 200, has exactly one H1, the correct language and its own canonical URL; OG URL is present.
- All 40 discovered internal navigation destinations returned successful responses; no broken internal links found.
- Missing page and both draft article slugs return 404; Unplugged's public homepage returns 200.
- Invalid empty contact payload: **400**, without a locale redirect or an email attempt. Root and unprefixed contact-page redirects remain 307 to Czech routes; generated icons return 200.
- Vercel reports the latest existing PR #17 deployment as successful. Its hosted runtime is protected by Vercel login; the audit used the same current source built locally, not a claimed authenticated hosted runtime walkthrough.
- One targeted Impeccable scan of the changed form/shared components reported no findings. Existing documented motion/reduced-motion tests remain applicable; this review does not change motion.

## Mobile Lighthouse lab results

Lighthouse 13.5.0, local production build, headless Chrome on this workstation, default mobile simulation:

| Page | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Homepage, final measured UI | 88 | 100 | 96 | 100 |
| Article, final measured UI | 95 | 100 | 96 | 100 |

A standalone earlier homepage run scored 91 performance. An initial run during the simultaneous 240-layout audit scored 60 and is not used as an unloaded performance benchmark. The observed 88–91 standalone range means the homepage's ≥90 performance target is **not reliably met**. A-13 remains open. The final proxy-only fix was verified separately and does not affect this rendered UI result.

The best-practices deduction is the local-only 404 for `/_vercel/insights/script.js`; this managed endpoint is supplied by Vercel, not `next start`. No claim is made that the protected hosted deployment scores 100. Real mobile hardware, assistive-technology certification and field Web Vitals remain outside these lab measurements.

For the five technical audit dimensions: accessibility 3/4 (strong automated/keyboard coverage, no full WCAG certification); performance 2/4 (homepage target unstable); theming 3/4 (consistent approved light palette, no dark-mode requirement); responsiveness 3/4 (40 routes at six sizes, not every device/browser); implementation integrity 2/4 (code failures corrected, real delivery remains unverified). These are review judgements, not Lighthouse scores.

## Release checklist — do not mark these complete from code inspection

- [ ] A-04: Matias subsequently confirmed the interim controller (Matias Bunnik), rights-request contact privacy@alesvia.org, Seznam Email Profi, and retention of ordinary inquiries for up to 12 months after closure with monthly manual checks. CS/EN candidate text reflects these decisions. Account-level DPA applicability, transfers, analytics, legal bases and operation of the deletion procedure remain unverified. See `docs/privacy-operations.md` (28 October follow-up). The policy is not cleared for release.
- [ ] Confirm existing public contact mailboxes and SMTP setup, then perform an approved end-to-end message delivery test. Only simulated delivery is verified here.
- [ ] Obtain the required human psychologist review of the psychological content included in the stack. Design approval is not that review.
- [ ] Finish A-13 homepage performance optimization and confirm ≥90 under repeatable mobile conditions. Recheck on the hosted preview when authenticated access is available.

The next owner action is verifying the provider contracts/tariff and SMTP setup using `docs/privacy-operations.md`; the previously missing controller and contact have been confirmed. Recommended follow-up for the measured technical issue is an Impeccable optimize pass on the homepage, then a polish pass after the remaining fixes. Merge remains with Matias.

## Where the work is stored

Source, documentation and commits are in this local checkout and pushed to `Kumungchi/alesvia-site` on GitHub. GitHub preserves the work and its review history; Vercel builds remote branches into previews. The complete current result is present in the remote release branch, even where an older local branch's tracking label differs. No merge was performed. Per the repository workflow, a merge to the production `master` branch triggers Vercel's production command, which also runs `convex deploy`; the schema/functions have not changed in this review.
