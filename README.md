# Alesvia Site

Public website for **Alesvia**, a Czech-founded institutional platform focused on human autonomy in an increasingly automated world.

This repo contains the public-facing site, thesis page, research publishing layer, contact flow, localized routing, and core brand/strategy working documents used to shape the organization.

## What this project is

The site is not a product app or a marketing microsite. It is the first public web presence for Alesvia as an umbrella organization working across:

- research
- policy
- education
- implementation

Current public goals:

- present Alesvia’s institutional thesis clearly
- publish research, briefings, and essays
- support partner and funder outreach
- provide a deployable public contact flow
- establish a bilingual CZ/EN web foundation

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- localized public routing for English and Czech
- server-side contact endpoint with SMTP delivery

## Repo structure

### Application

- [app](/C:/axiom/app)
  App Router pages, route handlers, sitemap, robots, icons, and localized page structure
- [components](/C:/axiom/components)
  shared UI components such as navigation, footer, reveal behavior, and contact form
- [lib](/C:/axiom/lib)
  routing, metadata, site origin handling, contact helpers, and other app utilities
- [proxy.ts](/C:/axiom/proxy.ts)
  locale redirects and future research-host routing behavior

### Content

- [content/thesis.ts](/C:/axiom/content/thesis.ts)
  main thesis content for the public thesis page
- [content/research/posts.ts](/C:/axiom/content/research/posts.ts)
  research article source content
- [content/research/slugs.ts](/C:/axiom/content/research/slugs.ts)
  localized research slugs
- [dictionaries](/C:/axiom/dictionaries)
  English and Czech UI copy

### Strategy and outreach

- [docs/brand-strategy.md](/C:/axiom/docs/brand-strategy.md)
  main brand identity and messaging document
- [docs/strategy.md](/C:/axiom/docs/strategy.md)
  broader strategic framing
- [docs/brand-decision.md](/C:/axiom/docs/brand-decision.md)
  naming and selection rationale
- [docs/partner-one-pager.md](/C:/axiom/docs/partner-one-pager.md)
  general partner one-pager
- [docs/partner-one-pager-funders-institutions.md](/C:/axiom/docs/partner-one-pager-funders-institutions.md)
  sharper institutional/funder version
- [docs/partner-deck-ready.md](/C:/axiom/docs/partner-deck-ready.md)
  deck-ready master document
- [docs/slides](/C:/axiom/docs/slides)
  markdown slide deck sources

### Deployment and launch docs

- [docs/deployment-setup.md](/C:/axiom/docs/deployment-setup.md)
  first-pass deployment guide
- [docs/launch-audit.md](/C:/axiom/docs/launch-audit.md)
  current accessibility/performance/deploy-readiness audit note
- [docs/implementation-plan-week-2026-04-13.md](/C:/axiom/docs/implementation-plan-week-2026-04-13.md)
  current implementation plan snapshot

## Routes and localization

The site uses localized public URLs while keeping stable internal route structure.

Examples:

- English homepage: `/en`
- Czech homepage: `/cs`
- English thesis: `/en/thesis`
- Czech thesis: `/cs/teze`
- English research index: `/en/research`
- Czech research index: `/cs/vyzkum`

Public route definitions live in [routes.ts](/C:/axiom/lib/routes.ts).

Localized rewrites are generated in Next config via [next.config.ts](/C:/axiom/next.config.ts), while locale detection and future research-subdomain behavior live in [proxy.ts](/C:/axiom/proxy.ts).

## Research publishing model

Research posts are currently file-backed, not CMS-backed.

To publish a new research post:

1. Add the post object to [posts.ts](/C:/axiom/content/research/posts.ts)
2. Add localized slug entries to [slugs.ts](/C:/axiom/content/research/slugs.ts)
3. Verify the post appears in [page.tsx](/C:/axiom/app/[lang]/research/page.tsx)
4. Run `npm run lint`
5. Run `npm run build`

Research post pages are rendered from [page.tsx](/C:/axiom/app/[lang]/research/[slug]/page.tsx).

## Contact flow

The public contact form submits to [route.ts](/C:/axiom/app/api/contact/route.ts).

Current behavior:

- validates name, email, subject, and message
- routes messages by subject using contact routing helpers
- sends mail through SMTP via `nodemailer`
- returns a `503` when mail delivery is not configured

This is production-capable once real SMTP credentials and recipient inboxes are configured.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Run the standard checks:

```bash
npm run lint
npm run build
```

## Environment variables

Copy values from [.env.example](/C:/axiom/.env.example).

Main groups:

- primary site origin
- future research origin
- SMTP credentials
- contact routing addresses

Important variables:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_RESEARCH_SITE_URL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM_EMAIL`
- `CONTACT_FORM_TO_EMAIL`
- `CONTACT_FORM_PARTNERS_EMAIL`
- `CONTACT_FORM_MEDIA_EMAIL`
- `CONTACT_FORM_RESEARCH_EMAIL`
- `CONTACT_FORM_OTHER_EMAIL`
- `CONTACT_FORM_BCC_EMAIL`

For a first Vercel Hobby deploy before the final domain is live, `NEXT_PUBLIC_SITE_URL` can be omitted if Vercel system environment variables are available. Site origin resolution falls back to:

- `VERCEL_PROJECT_PRODUCTION_URL`
- `VERCEL_URL`

That keeps preview and first production metadata from pointing at a non-live domain by default.

## Deployment

The intended first deployment target is **Vercel Hobby**.

Current practical path:

1. Keep the repo published as `alesvia-site`
2. Link the repo to a Vercel project
3. Configure env vars
4. Verify preview and production builds
5. Add the real domain once purchased

Deployment notes live in [docs/deployment-setup.md](/C:/axiom/docs/deployment-setup.md).

## Current project status

Already implemented:

- Alesvia brand rename across the public site
- thesis page
- bilingual routing and localized slugs
- research section with published posts
- partner one-pagers and deck materials
- markdown slide deck sources
- server-side contact endpoint
- launch-readiness accessibility/performance pass
- Vercel-first deploy hardening for pre-domain deployment

Not finished yet:

- real Vercel project link in `.vercel/project.json`
- real production domain
- organization email setup on the final domain
- dedicated live `research.alesvia.org` subdomain
- browser/device verification on deployed URLs

## Suggested next steps

- complete first Vercel deploy
- verify metadata and social previews on hosted URLs
- configure real SMTP delivery
- buy and attach the primary domain
- decide when to split research onto `research.alesvia.org`

## Brand and strategy source-of-truth docs

Start here if you need the institutional context behind the site:

- [docs/brand-strategy.md](/C:/axiom/docs/brand-strategy.md)
- [docs/strategy.md](/C:/axiom/docs/strategy.md)
- [docs/brand-decision.md](/C:/axiom/docs/brand-decision.md)
- [docs/partner-deck-ready.md](/C:/axiom/docs/partner-deck-ready.md)
- [docs/why-this-research-matters.md](/C:/axiom/docs/why-this-research-matters.md)
