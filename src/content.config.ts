import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const doctors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/doctors' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    specialty: z.string(),
    experience: z.string().optional(),
    photo: z.string().optional(),
    shortDescription: z.string(),
    education: z.string().optional(),
    certificates: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    geoTitle: z.string(),
    description: z.string(),
    priceFrom: z.number().optional(),
    priceTo: z.number().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    category: z.string().default('general'),
    tags: z.array(z.string()).default([]),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { doctors, services, blog };
