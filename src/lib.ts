import { getCollection } from "astro:content";

export async function getPosts() {
  const posts = await getCollection("writing", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
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
  if (!live) return { ...manual, href: manual.href || undefined, take: manual.take };
  return { ...live, take: same(live.title, manual.title) ? take : undefined };
}

let cached: Promise<ReturnType<typeof build>> | undefined;
async function build() {
  const [book, music] = await Promise.all([goodreadsCurrentlyReading(), lastfmRecent()]);
  return {
    ...NOW,
    reading: merge({ ...NOW.reading, by: NOW.reading.author }, book),
    listening: merge({ ...NOW.listening, by: NOW.listening.artist }, music),
  };
}

export function getNow() {
  return (cached ??= build());
}
