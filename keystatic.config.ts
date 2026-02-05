import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'the-chronoscope',
      name: 'alpha/chronoscope-studio',
    },
    // DO NOT specify clientId or clientSecret here
    // Keystatic will automatically look for:
    // - KEYSTATIC_GITHUB_CLIENT_ID (will be read at runtime)
    // - KEYSTATIC_GITHUB_CLIENT_SECRET (will be read at runtime)
  },
  
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        
        // Split Schema for Better UX
        subtitle: fields.text({ label: 'Subtitle / Blurb', multiline: true }),
        seoKeywords: fields.text({ label: 'SEO Keywords', description: 'Hidden from UI' }),
        
        mode: fields.select({
          label: 'Mode',
          options: [
            { label: 'Past', value: 'past' },
            { label: 'Future', value: 'future' }
          ],
          defaultValue: 'future',
        }),
        
        publishDate: fields.date({ label: 'Publish Date' }),
        
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/articles',
          publicPath: '/images/articles/',
        }),

        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),

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
      label: 'Videos',
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
        description: fields.text({ label: 'Description', multiline: true }),
      },
    }),
  },
});
