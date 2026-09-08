import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z
    .object({
      title: z.string(),
      slug: z.string(),
      date: z.coerce.date(),
      lang: z.enum(["es", "en"]),
      excerpt: z.string().optional(),
      sourceId: z.coerce.number(),
      sourceUrl: z.string().url(),
      sourceHash: z.string(),
      canonical: z.string().url().optional(),
      translatedFrom: z.string().url().optional(),
      needsReview: z.boolean().default(false),
      warnings: z.array(z.string()).optional(),
    })
    .strict(),
});

export const collections = { blog };
