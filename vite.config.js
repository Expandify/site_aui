import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
  base: '/site_aui/',
  root: 'src',
  publicDir: 'public',
  build: {
    outDir: 'dist', // вместо ../dist
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/index.scss" as *;`
      }
    }
  }
});
