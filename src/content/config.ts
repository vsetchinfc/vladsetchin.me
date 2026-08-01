import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    thumbnail: z.string().optional(),
    heroImageLight: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Reachable by direct URL (article page renders normally, incl. build-time
    // static generation) but hidden from every discovery surface: /blog/, the
    // homepage latest-posts teaser, RSS, and the sitemap. Also carries
    // noindex,nofollow. Used for external editorial review before a post goes
    // fully public. Distinct from `draft`, which excludes the post from the
    // build entirely (no page, no URL at all).
    unlisted: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
