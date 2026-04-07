# Alesvia — Implementation Plan for April 13-19, 2026

## Purpose

This document defines the implementation plan for the week of **April 13, 2026 to April 19, 2026**.

The goal of this week is not a full public launch. The goal is to move Alesvia from a strong local and brand-ready state into a credible **deployment-ready and outreach-ready** state.

This plan assumes:

- the Alesvia naming and brand direction are already locked
- the site copy, metadata, localized routing, and contact endpoint already exist in the repo
- the site is not yet fully deployed on a production domain
- the repo may still be local-first, with remote publishing and domain setup either pending or only partially complete

---

## Weekly objective

By the end of this week, Alesvia should have:

- a clean GitHub remote presence under the correct repo name
- a working Vercel deployment path on Hobby
- a domain decision and DNS rollout checklist
- a real thesis page or thesis-ready content draft
- a partner-facing one-pager or deck outline
- a stronger research section with at least one high-signal founder or institutional text ready to publish
- a short launch-readiness audit covering accessibility, performance, and trust surfaces

---

## Priority order

1. Deployment foundation
2. Domain and email decisions
3. Thesis as the main proof asset
4. Partner outreach material
5. Research publishing readiness
6. Launch-readiness audit and polish

---

## Scope for this week

### In scope

- GitHub repo naming and remote setup
- Vercel Hobby deployment and environment setup
- domain and organizational email planning
- thesis page planning or implementation
- partner material drafting
- research content preparation
- launch-readiness QA

### Out of scope

- full legal registration completion
- full CRM or donor pipeline setup
- paid traffic or ad campaigns
- advanced analytics stack
- separate production infrastructure for a future `research.` subdomain
- a full design-system refactor

---

## Day-by-day plan

## Monday, April 13, 2026

### Focus

Deployment foundation and repo hygiene.

### Tasks

- confirm the canonical GitHub repo name: `alesvia-site`
- publish or connect the local repo to the correct GitHub remote
- verify the repo default branch and visibility settings
- connect the project to Vercel Hobby
- configure baseline production environment variables from `.env.example`
- verify that preview and production builds succeed on Vercel

### Deliverables

- GitHub repo exists under the correct name
- Vercel project is connected to the repo
- environment variables are documented and entered
- first successful hosted deployment exists

### Definition of done

- GitHub remote works
- Vercel build completes without blocking errors
- site is reachable on a Vercel domain

---

## Tuesday, April 14, 2026

### Focus

Domain and organizational email decision path.

### Tasks

- confirm whether `alesvia.org` is available for purchase at a registrar
- if available, buy the primary domain
- define the email structure:
  - `info@alesvia.org`
  - `partners@alesvia.org`
  - `press@alesvia.org`
  - `research@alesvia.org`
- choose the email provider, with Google Workspace as the pragmatic default
- prepare DNS records checklist for:
  - apex domain
  - `www`
  - future `research.` subdomain
  - mail records

### Deliverables

- domain decision made
- email structure approved
- DNS checklist written down

### Definition of done

- domain is either purchased or clearly blocked with a backup path
- email setup path is unambiguous

---

## Wednesday, April 15, 2026

### Focus

Thesis as the core institutional proof asset.

### Tasks

- define the final thesis structure
- draft the full thesis or manifesto page
- make sure the text answers:
  - what problem Alesvia is responding to
  - why autonomy is the right framing
  - why this matters now
  - what Alesvia actually builds
  - what the first initiatives prove
- update the homepage CTA target so `Read the Thesis` points to a real destination once the page exists

### Deliverables

- thesis page content draft
- implementation plan for the thesis route if not yet live

### Definition of done

- Alesvia has one serious flagship text that can anchor homepage, outreach, and partner conversations

---

## Thursday, April 16, 2026

### Focus

Partner-facing materials.

### Tasks

- distill `brand-strategy.md`, `strategy.md`, and `partner-outreach.md` into a concise partner one-pager
- define a deck outline for institutional outreach
- prepare a short organization boilerplate for:
  - partners
  - media
  - general outreach
- identify the first target partner categories:
  - Czech academic institutions
  - policy and digital rights actors
  - philanthropic or public-interest funders
  - aligned research organizations

### Deliverables

- one-page partner overview
- outreach deck outline
- reusable short descriptions

### Definition of done

- Alesvia can be explained clearly to a serious partner in under two minutes and in one PDF page

---

## Friday, April 17, 2026

### Focus

Research publishing readiness.

### Tasks

- review the current research section and identify gaps in authority signaling
- prepare or revise at least one flagship research piece for publication
- define the short-term publishing mix:
  - one thesis-style piece
  - one briefing
  - one ecosystem or policy piece
- ensure section framing aligns with the approved label:
  - `Research & Insights`
  - `Briefings, Reports, and Essays`

### Deliverables

- editorial backlog for the next three public pieces
- one priority article ready for final polish or publication

### Definition of done

- the research section no longer feels like a placeholder and has a visible publishing direction

---

## Saturday, April 18, 2026

### Focus

Launch-readiness audit.

### Tasks

- run accessibility checks on core pages:
  - homepage
  - funding
  - contact
  - research
- run performance and basic Lighthouse-style checks
- verify metadata and social sharing surfaces:
  - favicon
  - OG image
  - page titles
  - descriptions
  - canonical URLs
- verify contact flow behavior in real deployment conditions
- verify Czech and English public routes

### Deliverables

- short audit summary
- list of final polish fixes

### Definition of done

- there are no obvious trust-breaking UX, accessibility, or metadata issues on the core public path

---

## Sunday, April 19, 2026

### Focus

Founder review and next-step lock.

### Tasks

- review the site end-to-end as if sending it to first partners
- check whether the homepage clearly communicates:
  - institution, not startup
  - autonomy, not generic AI ethics
  - real outputs, not just elegant language
  - a clear next action
- finalize the next-week priority list
- define a soft-launch list of people or institutions to send it to first

### Deliverables

- founder review notes
- next-week action list
- soft-launch target list

### Definition of done

- Alesvia is not necessarily fully launched, but it is coherent enough to share with early trusted partners

---

## Deliverables checklist for the week

- GitHub repo correctly named and connected
- Vercel deployment working
- domain and email plan finalized
- thesis draft completed
- partner one-pager drafted
- research backlog defined
- launch-readiness audit completed

---

## Known dependencies

- domain purchase availability may affect production URL timing
- email provider choice affects contact and trust setup
- thesis quality affects the effectiveness of the homepage CTA
- Vercel deployment depends on clean environment configuration

---

## Main risks

### Risk 1: Too much operational work, not enough flagship content

If deployment gets done but the thesis does not, the site will still feel thin.

Response:

- protect Wednesday for thesis work
- treat the thesis as a launch blocker, not a nice-to-have

### Risk 2: Domain and email decisions stall everything else

If domain setup drags on, it can create unnecessary friction.

Response:

- continue with Vercel-hosted preview while domain decisions finish
- do not block thesis, outreach materials, or research prep on DNS

### Risk 3: The site looks polished but not yet authoritative

Good visuals alone are not enough.

Response:

- prioritize proof assets: thesis, research, partner materials

---

## Success criteria

This week is successful if, by **Sunday, April 19, 2026**, the project has:

- a credible public deployment path
- a clear brand and institutional narrative
- a real flagship text
- materials suitable for first partner conversations
- a defined next step toward soft launch

---

## Recommended next week after this one

If this week goes well, the following week should focus on:

- publishing the thesis
- producing the first outreach PDF or deck
- sending the first institutional outreach messages
- resolving remaining audit issues
- preparing the first soft launch on the real domain
