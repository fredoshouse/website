import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getAllWriting } from "../lib";
import { SITE } from "../site";

export async function GET(context: APIContext) {
  const posts = await getAllWriting();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.date,
      link: post.href,
    })),
  });
}
