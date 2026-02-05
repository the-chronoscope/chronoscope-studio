import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: import.meta.env.PROD
    ? {
        kind: 'github',
        repo: {
          owner: 'the-chronoscope',
          name: 'chronoscope-studio',
        },
        // 1. Client ID: Must use PUBLIC_ prefix so the browser sees it.
        clientId: import.meta.env.PUBLIC_KEYSTATIC_GITHUB_CLIENT_ID,
        
        // 2. Client Secret: WE DO NOT INCLUDE IT HERE.
        // The Keystatic backend will automatically find 'KEYSTATIC_GITHUB_CLIENT_SECRET' 
        // in the server environment. This prevents Astro from stripping it.
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
        mode: fields.select({
          label: 'Mode',
          options: [
            { label: 'Past', value: 'past' },
            { label: 'Future', value: 'future' }
          ],
          defaultValue: 'future',
        }),
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
