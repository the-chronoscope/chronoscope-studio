import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
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
    },
    // We define the ID so the browser (client-side) can read it.
    // We DO NOT define the secret here; the server reads that natively.
    define: {
      'process.env.KEYSTATIC_GITHUB_CLIENT_ID': JSON.stringify(process.env.KEYSTATIC_GITHUB_CLIENT_ID),
    }
  }
});
