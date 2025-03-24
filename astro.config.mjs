// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import mdx from '@astrojs/mdx';

import playformInline from '@playform/inline';

const SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: isProd
    ? 'https://github.com/andres-ldr/john-michael-portfolio.git'
    : LOCALHOST_URL,
  base: isProd ? '/john-michael-portfolio' : '/',
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
