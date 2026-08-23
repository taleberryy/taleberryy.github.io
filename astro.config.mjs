// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // taleberryy.github.io bir "user page" reposu (kullanıcı adı.github.io) olduğu için
  // site kökte yayınlanır — base yolu gerekmez (proje sayfalarından farklı olarak).
  site: 'https://taleberryy.github.io',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});