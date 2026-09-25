import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    series: z.enum(["letters", "lessons", "notes"]).default("notes"),
    // Set when the piece first appeared elsewhere (e.g. LinkedIn).
    originalUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
