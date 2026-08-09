import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    order: z.number(),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/members' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    affiliation: z.string(),
    email: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    citation: z.string(),
    url: z.string().nullable(),
    section: z.enum(['submitted', 'published']),
  }),
});

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

export const collections = { news, members, publications, pages, opportunities };
