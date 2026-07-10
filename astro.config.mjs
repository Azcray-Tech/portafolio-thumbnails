import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://azcray-tech.github.io",
  base: "/portafolio-thumbnails",
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
        prefixDefaultLocale: true
    }
  },
  server: { host: '0.0.0.0', port: 3000 }
});
