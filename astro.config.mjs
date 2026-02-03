import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid', // Switches to "Static by default, Dynamic where needed"
  adapter: vercel(), // Tells Vercel how to handle the dynamic Admin parts
  integrations: [
    react(),
    tailwind(),
    keystatic()
  ],
});
