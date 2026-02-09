import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import markdoc from '@astrojs/markdoc'; // Import the reader
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chronoscope-studio.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
    keystatic(),
    markdoc(),
    sitemap()
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 5000
    },
    // We keep the Client ID define for the login button
    define: {
      'process.env.KEYSTATIC_GITHUB_CLIENT_ID': JSON.stringify(process.env.KEYSTATIC_GITHUB_CLIENT_ID),
    }
  }
});
