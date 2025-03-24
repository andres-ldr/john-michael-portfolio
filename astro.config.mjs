// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import mdx from '@astrojs/mdx';

import playformInline from '@playform/inline';

const LOCALHOST_URL = `http://localhost:${4321}`;

const LIVE_URL = `https://github.com/andres-ldr/john-michael-portfolio`;

// const SCRIPT = process.env.

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/andres-ldr/john-michael-portfolio.git',
  base: '/john-michael-portfolio',
  // trailingSlash: 'always',
  integrations: [
    tailwind(),
    alpinejs(),
    mdx(),
    (await import('@playform/inline')).default({
      Critters: true,
    }),
  ],
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  experimental: {
    svg: true,
  },
});
