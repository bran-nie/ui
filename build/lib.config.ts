import baseConfig from './base';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    ...baseConfig,
    build: {
        outDir: './dist/lib',
        lib: {
            entry: resolve(__dirname, '../packages/index.ts'),
            name: 'MakeX',
            fileName: (format) => `makex.${format}.js`,
        },
        cssCodeSplit: true,
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                },
                exports: 'named',
            },
        },
    },
    plugins: [...(baseConfig as any).plugins, dts({
        outputDir: './dist/types',
        // include: ['src/index.ts'],
        exclude: ['src/ignore'],
        staticImport: true,
        // skipDiagnostics: false,
        // logDiagnostics: true,
        insertTypesEntry: true,
    })],
});
