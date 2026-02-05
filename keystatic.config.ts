import { config, fields, collection } from '@keystatic/core';

export default config({
  // Generic Storage Config (Secrets handled by Astro server runtime)
  storage: import.meta.env.PROD
    ? {
        kind: 'github',
        repo: {
          owner: 'the-chronoscope',
          name: 'chronoscope-studio',
        },
      }
    : {
        kind: 'local',
      },
  
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        
        // 1. Subtitle / Blurb (Visible on Cards & Header)
        subtitle: fields.text({ 
          label: 'Subtitle / Card Blurb',
          multiline: true,
          description: 'The short summary shown on the homepage card and article header.'
        }),

        mode: fields.select({
          label: 'Timeline Mode',
          options: [
            { label: 'Past (Amber)', value: 'past' },
            { label: 'Future (Cyan)', value: 'future' }
          ],
          defaultValue: 'future',
        }),
        
        publishDate: fields.date({ label: 'Publish Date' }),
        
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/articles',
          publicPath: '/images/articles/',
        }),

        // 2. SEO Keywords (Hidden metadata)
        seoKeywords: fields.text({ 
          label: 'SEO Keywords',
          description: 'Comma-separated keywords for Google (not shown on UI).' 
        }),

        // 3. Tags (Expanded list)
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value || 'Tag',
          }
        ),

        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/articles',
            publicPath: '/images/articles/',
          },
        }),
      },
    }),
    
    videos: collection({
      label: 'Videos (YouTube)',
      slugField: 'title',
      path: 'src/content/videos/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        youtubeUrl: fields.url({ label: 'YouTube Link' }),
        mode: fields.select({
          label: 'Mode',
          options: [
            { label: 'Past', value: 'past' },
            { label: 'Future', value: 'future' }
          ],
          defaultValue: 'future',
        }),
        description: fields.text({ label: 'Short Description', multiline: true }),
      },
    }),
  },
});
