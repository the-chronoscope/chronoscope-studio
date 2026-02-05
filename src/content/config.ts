import { defineCollection, z } from 'astro:content';

// 1. Define the Article Schema
// This MUST match the fields in your Keystatic config exactly.
const articles = defineCollection({
  type: 'content', // v2.5+ uses 'content' for markdown
  schema: z.object({
    title: z.string(),
    mode: z.enum(['future', 'past', 'FUTURE', 'PAST']).optional(), // Handles case variance
    publishDate: z.coerce.date().optional(), // Converts "2026-02-05" string to Date object
    draft: z.boolean().optional().default(false),
    
    // Images: Allow string paths (from Keystatic)
    featuredImage: z.string().optional(),
    coverImage: z.string().optional(), // Fallback if you renamed the field
    
    metaDescription: z.string().optional(),
    subtitle: z.string().optional(),
    
    // Handle tags (Keystatic might save as array OR comma-string)
    tags: z.union([z.array(z.string()), z.string()]).optional(),
    keywords: z.string().optional(),
  }),
});

// 2. Define the Video Schema
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

// 3. Export the collections
export const collections = {
  articles,
  videos,
};
