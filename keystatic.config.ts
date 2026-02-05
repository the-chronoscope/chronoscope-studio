import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'alpha/chronoscope-studio',
  },
  
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ 
          name: { label: 'Title' } 
        }),
        mode: fields.select({
          label: 'Mode',
          options: [
            { label: 'Past', value: 'past' },
            { label: 'Future', value: 'future' }
          ],
          defaultValue: 'future',
        }),
        publishDate: fields.date({
          label: 'Publication Date',
          defaultValue: { kind: 'today' },
        }),
        draft: fields.checkbox({
          label: 'Draft',
          defaultValue: false,
          description: 'Unpublished articles won\'t appear on the site',
        }),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/images/articles',
          publicPath: '/images/articles/',
        }),
        metaDescription: fields.text({
          label: 'Meta Description (SEO)',
          multiline: true,
          validation: { 
            length: { min: 50, max: 160 } 
          },
          description: '50-160 characters for search engines',
        }),
        tags: fields.multiselect({
          label: 'Tags',
          options: [
            { label: 'Space', value: 'space' },
            { label: 'Ethics', value: 'ethics' },
            { label: 'Technology', value: 'technology' },
            { label: 'History', value: 'history' },
            { label: 'Deep Time', value: 'deep-time' },
          ],
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
        title: fields.slug({ 
          name: { label: 'Title' } 
        }),
        youtubeUrl: fields.url({ 
          label: 'YouTube Link',
          validation: { isRequired: true },
        }),
        mode: fields.select({
          label: 'Mode',
          options: [
            { label: 'Past', value: 'past' },
            { label: 'Future', value: 'future' }
          ],
          defaultValue: 'future',
        }),
        publishDate: fields.date({
          label: 'Publication Date',
          defaultValue: { kind: 'today' },
        }),
        description: fields.text({ 
          label: 'Short Description', 
          multiline: true,
          validation: { 
            length: { max: 300 } 
          },
        }),
        thumbnail: fields.image({
          label: 'Custom Thumbnail (optional)',
          directory: 'public/images/videos',
          publicPath: '/images/videos/',
          description: 'Leave empty to use YouTube thumbnail',
        }),
      },
    }),
  },
});
