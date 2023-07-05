import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    short: z.string(),
    ftimg : z.string(),   
    author: z.string(),
    date: z.string(),
    content: z.array(z.string()),
    tags: z.array(z.string())
  })
});

const locationsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    large: z.string(),
    image: z.string(),
    hero: z.string()
  })
});

const toursCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    imageSlider: z.string(),
    shortDescription: z.string(),
    description : z.string(),
    time : z.string(),
    gallery: z.array(z.string())
  })
});

export const collections = {
  'blog': blogCollection,
  'location': locationsCollection,
  'tour' : toursCollection
};