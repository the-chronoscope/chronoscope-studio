/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: '#030303',
        panel: '#0a0a0a',
        cyan: {
          400: '#22d3ee',
        },
        amber: {
          500: '#f59e0b',
        }
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'], // Fallback for now
      }
    },
  },
  plugins: [],
}
