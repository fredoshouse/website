// Optional build-time integrations. Each one returns null on any problem
// (not configured, network down, bad response) so the site always builds
// and just falls back to what's in src/now.ts.

export interface LiveItem {
  title: string;
  by: string;
  href?: string;
  image?: string;
}

const env = (key: string): string | undefined =>
  (import.meta.env[key] as string | undefined) || process.env[key] || undefined;

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

function tag(xml: string, name: string): string | undefined {
  const m = xml.match(new RegExp(`<${name}>\\s*(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?\\s*</${name}>`));
  return m?.[1]?.trim() || undefined;
}

export function parseGoodreadsRss(xml: string): LiveItem | null {
  const item = xml.match(/<item>([\s\S]*?)<\/item>/)?.[1];
  if (!item) return null;
  const title = tag(item, "title");
  if (!title) return null;
  return {
    title,
    by: tag(item, "author_name") ?? "",
    href: tag(item, "link"),
    image: tag(item, "book_large_image_url") ?? tag(item, "book_image_url"),
  };
}

export async function goodreadsCurrentlyReading(): Promise<LiveItem | null> {
  const id = env("GOODREADS_USER_ID");
  if (!id) return null;
  const xml = await fetchText(
    `https://www.goodreads.com/review/list_rss/${encodeURIComponent(id)}?shelf=currently-reading`,
  );
  return xml ? parseGoodreadsRss(xml) : null;
}

export function parseLastfm(json: unknown): LiveItem | null {
  const track = (json as any)?.recenttracks?.track;
  const t = Array.isArray(track) ? track[0] : track;
  if (!t?.name) return null;
  const images: { size: string; "#text": string }[] = t.image ?? [];
  return {
    title: t.album?.["#text"] || t.name,
    by: t.artist?.["#text"] ?? t.artist?.name ?? "",
    href: t.url,
    image: images.find((i) => i.size === "extralarge")?.["#text"] || undefined,
  };
}

export async function lastfmRecent(): Promise<LiveItem | null> {
  const user = env("LASTFM_USER");
  const key = env("LASTFM_API_KEY");
  if (!user || !key) return null;
  const text = await fetchText(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(user)}&api_key=${encodeURIComponent(key)}&format=json&limit=1`,
  );
  if (!text) return null;
  try {
    return parseLastfm(JSON.parse(text));
  } catch {
    return null;
  }
}
