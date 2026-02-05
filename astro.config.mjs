import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // 1. SITE URL: Mandatory for correct OAuth callbacks
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
    // 2. SURGICAL DEFINE:
    // We bake the Client ID into the code so the Browser/Server always see it.
    // We DO NOT include the Secret here. The Server will find it naturally.
    define: {
      'process.env.KEYSTATIC_GITHUB_CLIENT_ID': JSON.stringify(process.env.KEYSTATIC_GITHUB_CLIENT_ID),
    }
  }
});
