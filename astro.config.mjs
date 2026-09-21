import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rosen.cbe.princeton.edu',
  integrations: [sitemap()],
  output: 'static',
  build: {
    // The public host serves assets at /astro/, not the default /_astro/.
    assets: 'astro',
  },
});
