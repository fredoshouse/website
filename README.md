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

### The ticker and "right now"

Everything in the scrolling ticker and the "right now" section on the home page comes from `src/now.ts`: what you're reading, what's on repeat, how many accounts you're juggling, what's on your mind, and moodboard photos. Edit that file and bump `updated`.

- **On my mind** is a running log: add new lines at the top, keep the old ones.
- **Moodboard:** drop photos in `public/moodboard/` and list them in `moodboard`. The section stays hidden on the live site until there's at least one photo.

Optional auto-updates, set as environment variables on your host:

| Variable | What it does |
| --- | --- |
| `GOODREADS_USER_ID` | Pulls the top book off your Goodreads "currently reading" shelf |
| `LASTFM_USER`, `LASTFM_API_KEY` | Pulls the last album you played (Spotify can scrobble to Last.fm) |

These are fetched when the site builds, so set up a daily scheduled rebuild on your host to keep them fresh. If anything fails, the site just falls back to `src/now.ts`.

### Timeline

The vertical "path so far" timeline at `/timeline` runs from 1996 to now and reads from `src/timeline.ts`. Add a year to `STOPS` with an emoji, a title and an optional note; years you skip show as small ticks.

### Corner UI

- Top left: the current book (`reading` in `src/now.ts`).
- Top right: light/dark toggle and the **+** menu. Menu items are `LIFE_PAGES` in `src/site.ts`.
- Bottom: the song on repeat (`listening` in `src/now.ts`). Add a Spotify link as `href`, otherwise it opens a Spotify search.

### Newsletter (beehiiv)

Fill in `NEWSLETTER` in `src/site.ts`:

- `url`: your beehiiv publication address. Turns on a Subscribe button.
- `embedId`: the id from a beehiiv subscribe form embed. Swaps the button for beehiiv's inline email box.
- `rss`: your beehiiv RSS feed URL. Letters show up on the Writing page and home page on every build, linking out to beehiiv. If a letter also exists as a Markdown post here, the local copy wins.

### Ask Fredo (AI)

`/ask` is a chat where visitors ask about Fredo's work and writing. Answers stream from `/api/ask` (a Vercel function) using Claude, in Fredo's voice, grounded in:

- `src/knowledge/fredo.md`: the client-facing bio and facts. Edit this to change what it knows.
- Every letter in `src/content/writing/`: new letters are picked up automatically.

It needs `ANTHROPIC_API_KEY` set in Vercel (Project → Settings → Environment Variables). Without it, the page shows a friendly "email me instead" note. Questions are logged to PostHog as `ask question` events, so you can see what people ask. There's a light per-visitor rate limit (20 questions per 10 minutes).

### Analytics

Site analytics run on [PostHog](https://posthog.com) and only load when `PUBLIC_POSTHOG_KEY` is set (see `.env.example`). It records page views, time on page, and every click; turn on Session Replay in PostHog to watch real visits. Named events:

| Event | When |
| --- | --- |
| `writing click` | Someone opens a letter or lesson (with title and series) |
| `subscribe click` | Someone hits Subscribe (with the page they were on) |
| `email click` | Someone clicks your email address |
| `elsewhere click` | Someone clicks LinkedIn / Email / RSS in the footer |

Add `data-track="some name"` to any link or button to track it too.

Every link to beehiiv carries `utm_source=alfredadarkwah.com`, so beehiiv's own analytics show which reads and new subscribers came from the site.

### Adding a post

Every letter lives on this site as a Markdown file in `src/content/writing/` (imported from beehiiv, with `originalUrl` pointing back). To add one, create a new file there, or ask Claude to import the latest from beehiiv. The filename becomes the URL (`/writing/<filename>`).

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

## Staging

Connect the repo to [Vercel](https://vercel.com/new) (Import Git Repository → pick `fredoshouse/website`; it detects Astro on its own). Every branch push then gets its own preview URL, and `main` becomes production.

## Domains

`alfredadarkwah.com` is the canonical domain (set in `astro.config.mjs`). Point `fredoshouse.com` at the same deployment and set it to 301-redirect to `alfredadarkwah.com` in your host's domain settings, so both links work and search engines see a single site.

## Voice

Every word on this site should sound like Fredo talking, not a company.

- Casual and simple. Short sentences. Contractions. Write it how you'd say it.
- Human first. It's fine to admit the to-do list never ends or that some weeks go better than others.
- No corporate filler ("leverage", "solutions", "architect", "clear-eyed", "best-in-class").
- Say what the work actually is, in plain words. "I bring in new business," not "I drive revenue growth initiatives."
- Keep the facts current: growth at Ghost Note, operations at Integral, 10 to 20 accounts at a time, based in Seattle.
