# Alesvia — Deployment Setup

## Purpose

This document captures the current Day 1 deployment state and the exact steps required to get the Alesvia site onto **GitHub** and **Vercel Hobby**.

It is intentionally pragmatic and tied to the current repo state.

---

## Current state

As of **April 7, 2026**, the repo is in this state:

- local Git repo exists and works
- current branch is `master`
- GitHub remote is configured as `origin`
- no `.vercel/project.json` file exists
- the Vercel CLI is available through `npx vercel`
- the app already builds locally with `npm run lint` and `npm run build`

This means the site is deployment-ready in code terms, but not yet linked to a Vercel project.

---

## Canonical names

Use these names consistently:

- GitHub repo: `alesvia-site`
- Vercel project: `alesvia-site`
- primary domain target: `alesvia.org`
- future research host: `research.alesvia.org`

---

## Day 1 checklist

### 1. Confirm the GitHub repository

Current remote:

```bash
git remote -v
```

Expected:

- `origin` points to the `alesvia-site` GitHub repository

### 2. Confirm the Vercel CLI

```bash
npx vercel --version
```

### 3. Log in to Vercel

```bash
npx vercel login
```

### 4. Link the repo to a Vercel project

Recommended first pass:

```bash
npx vercel link
```

If the project already exists, use explicit linking:

```bash
npx vercel link --yes --project alesvia-site
```

Successful linking should create:

- `.vercel/project.json`

### 5. Configure environment variables

Load values from [.env.example](../.env.example).

The app now supports a more practical first deploy path:

- `NEXT_PUBLIC_SITE_URL` is recommended once the real domain or final production URL is known
- until then, the app can fall back to Vercel system environment variables:
  - `VERCEL_PROJECT_PRODUCTION_URL`
  - `VERCEL_URL`

This avoids generating metadata against a domain that is not live yet.

Minimum production set:

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

Recommended if available:

- `NEXT_PUBLIC_SITE_URL`

Add them through the Vercel dashboard or CLI:

```bash
npx vercel env add NEXT_PUBLIC_SITE_URL
```

Repeat for the rest of the keys.

### 6. Verify deployment

Preview deployment:

```bash
npx vercel
```

Production deployment:

```bash
npx vercel --prod
```

### 7. Post-deploy checks

After the first hosted deploy, verify:

- homepage loads in both languages
- contact form responds correctly
- metadata and OG image resolve
- funding and research pages load correctly
- sitemap and robots routes respond

---

## Recommended immediate follow-up

Once Day 1 is complete:

1. buy and attach the real domain
2. set up the organization email provider
3. set `NEXT_PUBLIC_SITE_URL` to the final primary origin
4. set `NEXT_PUBLIC_RESEARCH_SITE_URL` when `research.alesvia.org` is real
5. confirm contact routing with real inboxes

---

## Known blockers outside the repo

These cannot be solved by code changes alone:

- GitHub publish requires user account action or GitHub Desktop action
- Vercel login requires user authentication
- custom domain requires registrar purchase and DNS control
- email delivery requires real SMTP credentials
