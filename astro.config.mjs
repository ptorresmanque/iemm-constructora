// @ts-check
import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.iemm.cl',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  env: {
    schema: {
      SMTP_HOST: envField.string({ context: 'server', access: 'secret' }),
      SMTP_PORT: envField.number({ context: 'server', access: 'secret' }),
      SMTP_USER: envField.string({ context: 'server', access: 'secret' }),
      SMTP_PASS: envField.string({ context: 'server', access: 'secret' }),
      CONTACT_TO: envField.string({ context: 'server', access: 'secret' }),
    },
  },
  security: {
    allowedDomains: [
      { hostname: 'www.iemm.cl', protocol: 'https' },
      { hostname: 'iemm.cl', protocol: 'https' },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
