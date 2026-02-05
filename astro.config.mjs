import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // 1. WE MUST DEFINE THE SITE URL
  // This ensures authentication redirects use the correct domain (https)
  site: 'https://chronoscope-studio.vercel.app',

  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
    keystatic()
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 5000
    }
  }
});
