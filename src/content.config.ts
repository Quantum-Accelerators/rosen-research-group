import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
});

const opportunities = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/opportunities' }),
  schema: z.object({
    label: z.string(),
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = { pages, opportunities };
