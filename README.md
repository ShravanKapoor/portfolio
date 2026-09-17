# Personal Portfolio

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Editing content

Everything on the site — name, experience, projects, skills, education,
certifications — lives in **one file**: `src/lib/data.ts`. Edit that file,
nothing else, to update the site's content. Anything currently marked
`PLACEHOLDER` should be replaced before sharing this link in a job
application.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploying to Vercel (free tier, vercel.app subdomain)

1. Push this project to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub.
3. Click "Add New Project", select this repository.
4. Leave all build settings at their Next.js defaults and click Deploy.
5. Vercel gives you a free `your-project-name.vercel.app` URL. Every push to
   `main` redeploys automatically; every pull request gets its own preview URL.

To add a custom domain later: Project Settings → Domains → add your domain,
then point its DNS at Vercel as instructed there. No code or rebuild required.

## What's deliberately not built yet

Per the phased plan, this is the Phase 4 (core development) milestone:
hero, projects, experience, skills, education, and contact, with accurate
placeholder-marked content. Not yet included (Phase 5 — Integrations):

- Live GitHub API data (pinned repos, contribution graph)
- The "ask this portfolio" RAG assistant
- Individual project deep-dive pages
- OG image generation, analytics

## Before going live, replace these placeholders in `src/lib/data.ts`

- `email`, `resumeUrl`
- Sensation Software Solutions dates/location
- Education dates
- Certification year
- Project repo/demo links marked `PLACEHOLDER_REPO_LINK` / `PLACEHOLDER_DEMO_LINK`
- Confirm `name` is your correct display name
- Update `YOUR-DOMAIN` in `src/app/robots.ts` and `src/app/sitemap.ts` once deployed
