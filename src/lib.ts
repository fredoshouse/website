import { getCollection } from "astro:content";
import { NEWSLETTER, BEEHIIV_UTM } from "./site";
import { newsletterPosts } from "./integrations";

export async function getPosts() {
  const posts = await getCollection("writing", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export interface WritingItem {
  title: string;
  date: Date;
  href: string;
  series: string;
  external: boolean;
}

// Every letter lives on this site (src/content/writing). If the beehiiv RSS
// feed is set, anything published there that hasn't been imported yet still
// shows up, linking out to beehiiv until it's pulled in.
let writingCache: Promise<WritingItem[]> | undefined;
export function getAllWriting() {
  return (writingCache ??= (async () => {
    const [local, letters] = await Promise.all([
      getPosts(),
      newsletterPosts(NEWSLETTER.rss),
    ]);
    const items: WritingItem[] = local.map((p) => ({
      title: p.data.title,
      date: p.data.date,
      href: `/writing/${p.id}`,
      series: p.data.series,
      external: false,
    }));
    const bare = (u: string) => u.split("?")[0].replace(/\/$/, "");
    const imported = new Set(local.map((p) => p.data.originalUrl && bare(p.data.originalUrl)));
    for (const l of letters) {
      if (imported.has(bare(l.href))) continue;
      const sep = l.href.includes("?") ? "&" : "?";
      items.push({
        title: l.title,
        date: l.date,
        href: `${l.href}${sep}${BEEHIIV_UTM}&utm_campaign=writing`,
        series: "letters",
        external: true,
      });
    }
    return items.sort((a, b) => b.date.valueOf() - a.date.valueOf());
  })());
}

export function formatDate(date: Date, style: "short" | "long" = "short") {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: style === "long" ? "long" : "short",
    day: style === "long" ? "numeric" : undefined,
    timeZone: "UTC",
  });
}

import { NOW } from "./now";
import { goodreadsCurrentlyReading, lastfmRecent, type LiveItem } from "./integrations";

export interface NowItem {
  title: string;
  by: string;
  href?: string;
  image?: string;
  take?: string;
}

const isTodo = (s: string) => !s || s.startsWith("TODO");
const same = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase();

// Live data wins for title/link/cover; the hand-written take sticks around
// only while it's still about the same thing.
function merge(
  manual: { title: string; by: string; href: string; take: string },
  live: LiveItem | null,
): NowItem {
  const take = isTodo(manual.take) ? undefined : manual.take;
  if (!live) return { ...manual, href: manual.href || undefined, take };
  return { ...live, take: same(live.title, manual.title) ? take : undefined };
}

let cached: ReturnType<typeof build> | undefined;
async function build() {
  const [book, music] = await Promise.all([goodreadsCurrentlyReading(), lastfmRecent()]);
  return {
    ...NOW,
    onMyMind: NOW.onMyMind.filter((m) => !isTodo(m.text)),
    reading: merge({ ...NOW.reading, by: NOW.reading.author }, book),
    listening: merge({ ...NOW.listening, by: NOW.listening.artist }, music),
  };
}

export function getNow() {
  return (cached ??= build());
}
