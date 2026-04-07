# Alesvia Site

Public website for **Alesvia**, an institutional platform focused on preserving human autonomy in an increasingly automated world.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- localized routing for English and Czech
- server-side contact endpoint with SMTP-based delivery

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

Copy values from [.env.example](./.env.example).

Required groups:

- site URLs
- SMTP credentials
- contact routing addresses

Key variables:

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

## Deployment

The intended first deployment target is **Vercel Hobby**.

Deployment setup notes live in [docs/deployment-setup.md](./docs/deployment-setup.md).

High-level deployment flow:

1. Publish the repository to GitHub as `alesvia-site`
2. Create or link a Vercel project
3. Configure production environment variables
4. Verify preview and production builds
5. Add the real domain once purchased

## Brand and strategy documents

- [docs/brand-strategy.md](./docs/brand-strategy.md)
- [docs/brand-decision.md](./docs/brand-decision.md)
- [docs/strategy.md](./docs/strategy.md)
- [docs/partner-outreach.md](./docs/partner-outreach.md)
- [docs/implementation-plan-week-2026-04-13.md](./docs/implementation-plan-week-2026-04-13.md)
