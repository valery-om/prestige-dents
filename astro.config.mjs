// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prestige-dents.ru',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact(), sitemap()],
});