import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://chronoscope-studio.vercel.app',
  
  // CRITICAL: Must be 'hybrid' for Keystatic GitHub mode to work
  // This allows static pages + dynamic API routes for OAuth
  output: 'hybrid',
  
  // Use serverless adapter (not edge) to ensure process.env is available
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
    // DO NOT add 'define' block for environment variables
    // Vercel injects them at runtime automatically
  },
});
