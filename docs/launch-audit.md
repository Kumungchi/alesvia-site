# Alesvia — Launch Audit

## Scope

This note captures the current accessibility, performance, and deployment-readiness pass completed on **April 7, 2026**.

It focuses on issues that can be improved directly in the repo before a public launch.

---

## Changes completed

### Accessibility

- mobile navigation now exposes stronger semantics and labeling
- mobile menu closes on route change and `Escape`
- language switcher now exposes a navigation label and `aria-current`
- scroll-reveal behavior now respects `prefers-reduced-motion` in JavaScript, not only in CSS

### Performance

- scroll progress bar no longer triggers React rerenders on every scroll event
- scroll progress now uses `requestAnimationFrame` and `transform: scaleX(...)` instead of width-based layout updates
- reduced-motion users no longer get unnecessary animation work from the progress bar

### Deployment readiness

- site origin resolution now supports Vercel system environment variables
- first deploys can use `VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL` before the final domain is configured
- deployment documentation now reflects the real repo state and current first-pass Vercel flow

---

## Remaining manual checks

These still require a human browser/device pass before public launch:

- keyboard-only navigation across the entire site
- mobile menu behavior on an actual small-screen device
- color contrast review across all interactive states
- social image previews on deployed URLs
- contact form delivery with real SMTP credentials
- preview and production metadata after the first Vercel link

---

## Recommended next verification pass

After the first Vercel deploy:

1. verify `/en` and `/cs` in a real browser
2. verify the new research post renders correctly in both languages
3. verify canonical URLs and OG metadata on the deployed host
4. verify the contact endpoint with real mail delivery
5. verify the future research-host routing once the subdomain exists
