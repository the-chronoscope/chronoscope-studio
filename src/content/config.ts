import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    mode: z.enum(['future', 'past', 'FUTURE', 'PAST']).optional(),
    publishDate: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),
    
    // Images: Keystatic saves these as strings
    featuredImage: z.string().optional(),
    coverImage: z.string().optional(), 
    
    metaDescription: z.string().optional(),
    subtitle: z.string().optional(),
    
    // Keystatic might save keywords as a comma-separated string or an array
    tags: z.union([z.array(z.string()), z.string()]).optional(),
    keywords: z.string().optional(),
  }),
});

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    youtubeUrl: z.string(),
    mode: z.enum(['future', 'past', 'FUTURE', 'PAST']).optional(),
    description: z.string().optional(),
    publishDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  articles,
  videos,
};
