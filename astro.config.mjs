// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Update this to the production domain before launch so canonical URLs and
  // Open Graph tags resolve correctly.
  site: 'https://upforair.app',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
