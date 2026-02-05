import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Server mode ensures API routes are dynamic and have access to process.env
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
