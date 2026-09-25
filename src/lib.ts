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
