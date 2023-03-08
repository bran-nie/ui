import baseConfig from './base';
import { defineConfig } from 'vite';

export default defineConfig({
    ...baseConfig,
    build: {
        outDir: './dist/docs',
    },
});
