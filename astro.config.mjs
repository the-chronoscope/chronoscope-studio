import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    tailwind(),
    keystatic()
  ],
});
