import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // Ensures runtime dynamics
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
    keystatic() // We let the integration handle the secrets automatically from process.env
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 5000
    }
  }
});
