import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://chronoscope-studio.vercel.app',
  
  // UPDATED: Use 'server' mode for Keystatic (hybrid was removed in latest Astro 5)
  output: 'server',
  
  // Use serverless adapter to ensure process.env is available
  adapter: vercel({
    edgeMiddleware: false,
  }),
  
  integrations: [
    react(),
    tailwind(),
    keystatic(), // Must come after React
  ],
  
  vite: {
    build: {
      chunkSizeWarningLimit: 5000,
    },
  },
});
