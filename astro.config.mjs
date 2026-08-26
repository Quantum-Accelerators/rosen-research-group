import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rosen.cbe.princeton.edu',
  integrations: [sitemap()],
  output: 'static',
});
