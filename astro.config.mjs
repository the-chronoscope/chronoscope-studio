import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // CRITICAL: Forces the correct URL for OAuth handshakes
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
    // REMOVED: 'define' block. 
    // We must let the Node.js runtime resolve process.env naturally.
  }
});
