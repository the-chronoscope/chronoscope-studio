import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    // Optimizes the function bundling for Vercel's specific runtime
    includeFiles: ['./src/**/*']
  }),
  integrations: [
    react(),
    tailwind(),
    keystatic()
  ],
  vite: {
    build: {
      // Prevents the "Large Chunk" warning from stopping the build
      chunkSizeWarningLimit: 5000
    }
  }
});
