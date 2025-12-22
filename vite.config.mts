import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config
export default defineConfig({
  base: '/memo-match/',
  resolve: { alias: { '@': '/src' } },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      }
    }),
    VitePWA({
      srcDir: 'src',
      filename: 'sw.ts',
      manifest: false,
      injectRegister: null,
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      injectManifest: {
        globPatterns: ['**/*.{html,css,js,png,webp,woff2,webmanifest}']
      }
    })
  ]
});
