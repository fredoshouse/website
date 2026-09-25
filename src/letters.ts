// Snapshot of Fredo's Letters on beehiiv (fredoshouse.beehiiv.com).
// Every post links out to beehiiv. Titles are lightly cleaned up (series
// prefixes and emoji dropped, since the Writing page groups by series).
//
// New letters show up automatically if NEWSLETTER.rss is set in site.ts.
// Otherwise ask Claude to refresh this list from beehiiv.

export interface Letter {
  title: string;
  slug: string;
  date: string;
  series: "letters" | "lessons" | "notes";
}

export const BEEHIIV_POSTS: Letter[] = [
  { title: "Grow Slow. Grow True.", slug: "grow-slow-grow-true", date: "2025-05-01", series: "letters" },
  { title: "A Love Letter to the Ones Who Are Learning Late", slug: "a-love-letter-to-the-ones-who-are-learning-late", date: "2025-04-21", series: "letters" },
  { title: "Fall in Love With Boredom", slug: "fall-in-love-with-boredom", date: "2025-04-14", series: "letters" },
  { title: "The Duality of Fredo", slug: "the-duality-of-fredo", date: "2025-04-02", series: "letters" },
  { title: "The Assistant That Never Sleeps", slug: "the-assistant-that-never-sleeps", date: "2025-03-24", series: "letters" },
  { title: "Second Place is the First Loser", slug: "second-place-is-the-first-loser", date: "2025-03-17", series: "letters" },
  { title: "When God Sends a Wake-Up Call... You Listen", slug: "when-god-sends-a-wake-up-call-you-listen", date: "2025-03-10", series: "letters" },
  { title: "Embarking on a New Journey: Welcome to Fredo's House", slug: "embarking-on-a-new-journey-welcome-to-fredo-s-house", date: "2025-03-03", series: "letters" },
  { title: "Sneak Peek: Fredo's Housekeeping Template", slug: "fredos-housekeeping-template", date: "2023-12-22", series: "notes" },
  { title: "Introduction to Notion", slug: "intro-to-notion", date: "2023-12-15", series: "lessons" },
  { title: "Gantt Chart", slug: "gantt-chart", date: "2023-12-08", series: "lessons" },
  { title: "Case Study: Summer Walker's Website Build", slug: "case-study-summer-walker", date: "2023-12-01", series: "notes" },
  { title: "Project Timelines", slug: "project-timelines", date: "2023-10-27", series: "lessons" },
  { title: "Project Budget", slug: "project-budget", date: "2023-10-20", series: "lessons" },
  { title: "Project Scope", slug: "project-scope", date: "2023-10-06", series: "lessons" },
  { title: "I'm Not a Project Manager, I'm an Operator", slug: "operating-like-fredo", date: "2023-09-29", series: "letters" },
  { title: "The Project Life Cycle", slug: "project-life-cycle", date: "2023-09-22", series: "lessons" },
  { title: "What's a Project?", slug: "whatisaproject", date: "2023-09-15", series: "lessons" },
  { title: "An Introduction to Project Management", slug: "introduction-to-project-management", date: "2023-09-08", series: "lessons" },
  { title: "August 2023 Letter", slug: "fredosletter-august2023", date: "2023-08-30", series: "letters" },
  { title: "Letter #4", slug: "fredosmailbox4", date: "2023-01-02", series: "letters" },
  { title: "Letter #3", slug: "fredosmailbox3", date: "2022-12-28", series: "letters" },
];
