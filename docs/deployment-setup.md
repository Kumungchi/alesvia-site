# Alesvia — Deployment Setup

## Purpose

This document captures the current Day 1 deployment state and the exact steps required to get the Alesvia site onto **GitHub** and **Vercel Hobby**.

It is intentionally pragmatic and tied to the current repo state.

---

## Current state

As of **April 7, 2026**, the local repo is in this state:

- local Git repo exists and works
- current branch is `master`
- no Git remote is configured yet
- no `.vercel/project.json` file exists
- the Vercel CLI is not installed in the current shell environment
- the app already builds locally with `npm run lint` and `npm run build`

This means the site is deployment-ready in code terms, but not yet connected to hosting.

---

## Canonical names

Use these names consistently:

- GitHub repo: `alesvia-site`
- Vercel project: `alesvia-site`
- primary domain target: `alesvia.org`
- future research host: `research.alesvia.org`

---

## Day 1 checklist

### 1. Publish the GitHub repository

Preferred path:

- open GitHub Desktop
- add the local repository from `C:\axiom`
- use `Publish repository...`
- set the name to `alesvia-site`

Alternative CLI path:

```bash
git remote add origin <github-repo-url>
git push -u origin master
```

If the remote uses a different default branch policy later, branch cleanup can happen after the first publish.

### 2. Install or invoke the Vercel CLI

The current environment does not have `vercel` installed globally.

Use one of these:

```bash
npm install -g vercel
```

or:

```bash
npx vercel --version
```

### 3. Log in to Vercel

```bash
vercel login
```

If using `npx`:

```bash
npx vercel login
```

### 4. Link the repo to a Vercel project

Recommended first pass:

```bash
vercel link
```

If the project already exists, use explicit linking:

```bash
vercel link --yes --project alesvia-site
```

Successful linking should create:

- `.vercel/project.json`

### 5. Configure environment variables

Load values from [.env.example](../.env.example).

Minimum production set:

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

Add them through the Vercel dashboard or CLI:

```bash
vercel env add NEXT_PUBLIC_SITE_URL
```

Repeat for the rest of the keys.

### 6. Verify deployment

Preview deployment:

```bash
vercel
```

Production deployment:

```bash
vercel --prod
```

If using `npx`:

```bash
npx vercel
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
3. implement the thesis page as the main proof asset
4. prepare partner outreach materials

---

## Known blockers outside the repo

These cannot be solved by code changes alone:

- GitHub publish requires user account action or GitHub Desktop action
- Vercel login requires user authentication
- custom domain requires registrar purchase and DNS control
- email delivery requires real SMTP credentials
