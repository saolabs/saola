import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const context = process.env.VITE_CONTEXT || 'web';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                `resources/js/saola/app.js`,  // Main Saola app entry
                `resources/css/app.css`,      // Tailwind v4 entry → static/saola/{ctx}/css/app.css
            ],
            refresh: true,
        }),
        tailwindcss(), // Tailwind v4: compile @import 'tailwindcss' trong app.css
    ],
    resolve: {
        alias: {
            // Source directories (for IDE and Vite dev)
            '@': path.resolve(__dirname, 'resources/js'),
            '@saola': path.resolve(__dirname, 'resources/saola'),
            '@saola/core': path.resolve(__dirname, 'resources/saola/core'),
            '@saola/app': path.resolve(__dirname, 'resources/saola/app'),
            
            // Compiled directories
            '@compiled': path.resolve(__dirname, 'resources/js/saola'),
            '@views': path.resolve(__dirname, `resources/js/saola/${context}`),
            
            // App directories
            '@app': path.resolve(__dirname, 'resources/js/app'),
        }
    },
    build: {
        sourcemap: true, // Enable source maps for debugging
        outDir: `public/static/saola/${context}`,
        assetsDir: 'js',
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                // CSS (Tailwind app.css) → css/app.css (non-hashed, ổn định để
                // head.sao tham chiếu asset('static/saola/{ctx}/css/app.css')).
                // Asset khác (ảnh/font) giữ assets/.
                assetFileNames: (info) => {
                    const names = info.names ?? (info.name ? [info.name] : []);
                    if (names.some((n) => n.endsWith('.css'))) {
                        return 'css/[name][extname]';
                    }
                    return 'assets/[name].[ext]';
                }
            }
        }
    },
    server: {
        hmr: {
            host: 'localhost',
            port: 5173,
        },
    },
});