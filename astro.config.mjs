// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import mdx from '@astrojs/mdx';

import playformInline from '@playform/inline';

const SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = `https://github.com/andres-ldr/john-michael-portfolio.git`;

const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');
let BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}

//     ? 'https://github.com/andres-ldr/john-michael-portfolio.git'

// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
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
