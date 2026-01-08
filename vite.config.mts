import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config
export default defineConfig({
  base: '/memo-match/',
  resolve: {
    alias: { '@': '/src', '#': '/src/assets' }
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      }
    }),
    vanillaExtractPlugin(),
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
  ],
  // @ts-expect-error: test missing in config
  // https://vitest.dev/config
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'jsdom',
    include: ['__tests__/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      include: ['src/hooks/*.{ts,tsx}']
    }
  }
});
