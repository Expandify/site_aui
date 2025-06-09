import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: 'src',
    publicDir: 'public',
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
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true
    }
});
