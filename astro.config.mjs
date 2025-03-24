// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import mdx from '@astrojs/mdx';

import playformInline from '@playform/inline';

const SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = `https://github.com/andres-ldr`;

const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');
let SITE_URL = LOCALHOST_URL;
let BASE = '/';

if (isBuild) {
  SITE_URL = LIVE_URL;
  BASE = '/john-michael-portfolio.git';
}

//     ? 'https://github.com/andres-ldr/john-michael-portfolio.git'

// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT },
  site: SITE_URL,
  base: BASE,
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
