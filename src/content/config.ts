import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    mode: z.enum(['future', 'past', 'FUTURE', 'PAST']).optional(),
    publishDate: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),
    
    // Images
    featuredImage: z.string().optional(),
    coverImage: z.string().optional(), 
    
    // New Schema Fields
    subtitle: z.string().optional(), // The blurb
    seoKeywords: z.string().optional(), // For <meta name="keywords">
    
    // Legacy fallback
    metaDescription: z.string().optional(),
    
    // Tags can be array (new way) or string (old way)
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
