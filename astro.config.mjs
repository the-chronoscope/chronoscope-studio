import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://chronoscope-studio.vercel.app',
  
  // For Keystatic with GitHub, we need server-side rendering
  // In latest Astro 5, use 'server' - do NOT use 'hybrid' or 'static'
  output: 'server',
  
  adapter: vercel({
    edgeMiddleware: false,
  }),
  
  integrations: [
    react(),
    tailwind(),
    keystatic(),
  ],
});
