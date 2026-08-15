import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://quantum-accelerators.github.io',
  base: '/rosen-research-group',
  integrations: [sitemap()],
  output: 'static',
});
