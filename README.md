# alfredadarkwah.com / fredoshouse.com

Personal site for Alfred "Fredo" Adarkwah and Fredo's House. Built with [Astro](https://astro.build) as a static site.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Editing

- **Bio, email, nav, social links, writing series:** `src/site.ts`
- **Pages:** `src/pages/` (`index`, `work`, `about`, `writing/`)
- **Styles & colors:** `src/styles/global.css`

### Adding a post

Create a Markdown file in `src/content/writing/`. The filename becomes the URL (`/writing/<filename>`).

```md
---
title: "Post title"
description: "One-line summary for listings, RSS, and social previews."
date: 2026-09-25
series: letters        # letters | lessons | notes
originalUrl: https://… # optional, if it first ran on LinkedIn
draft: false           # true hides it from the site
---

Your writing here.
```

## Domains

`alfredadarkwah.com` is the canonical domain (set in `astro.config.mjs`). Point `fredoshouse.com` at the same deployment and set it to 301-redirect to `alfredadarkwah.com` in your host's domain settings, so both links work and search engines see a single site.

## Voice

Every word on this site should sound like Fredo talking, not a company.

- Casual and simple. Short sentences. Contractions. Write it how you'd say it.
- Human first. It's fine to admit the to-do list never ends or that some weeks go better than others.
- No corporate filler ("leverage", "solutions", "architect", "clear-eyed", "best-in-class").
- Say what the work actually is, in plain words. "I bring in new business," not "I drive revenue growth initiatives."
- Keep the facts current: growth at Ghost Note, operations at Integral, 10 to 20 accounts at a time, based in Seattle.
