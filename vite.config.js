import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import saolaCompiler from '@saolabs/compiler/vite';
import path from 'path';

const context = process.env.VITE_CONTEXT || 'web';
const useLocalSaolaClient = process.env.SAOLA_LOCAL_CLIENT === 'true';

export default defineConfig({
    plugins: [
        // Compiler owns the initial .sao build and its single dev watcher.
        saolaCompiler({ context, watch: true }),
        laravel({
            input: [
                `resources/js/saola/app.js`,  // Main Saola app entry
                `resources/css/app.css`,      // Tailwind v4 entry → static/saola/{ctx}/css/app.css
            ],
            // Full-reload the browser on PHP changes. `refresh: true` only covers
            // Livewire/View-Components; add app/** so editing Controllers/Models
            // (picked up per-request by artisan serve) also triggers a reload.
            refresh: [
                'app/**',
                'routes/**',
                'resources/views/**',
                'lang/**',
                'resources/lang/**',
            ],
        }),
        tailwindcss(), // Tailwind v4: compile @import 'tailwindcss' trong app.css
    ],
    resolve: {
        alias: {
            ...(useLocalSaolaClient ? {
                '@saolabs/client': path.resolve(__dirname, '../client/dist/index.js'),
            } : {}),
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
    // Local client is rebuilt before every dev run. Vite's dependency cache is
    // keyed mainly by config/lockfile, so without force it can keep serving an
    // older prebundle even though ../client/dist changed underneath it.
    // In local mode `tsc --watch` (npm:dev:client) rewrites ../client/dist on
    // every edit, so exclude it from prebundling: Vite then serves the aliased
    // file directly and hot-reloads when it changes instead of serving a stale
    // prebundle.
    optimizeDeps: {
        force: useLocalSaolaClient,
        ...(useLocalSaolaClient ? { exclude: ['@saolabs/client'] } : {}),
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
        host: '127.0.0.1',
        port: 5173,
        strictPort: true,
        hmr: {
            host: '127.0.0.1',
            port: 5173,
        },
        // The local client lives outside this project root (../client/dist).
        // Allow Vite to read+watch it so tsc --watch rebuilds hot-reload.
        ...(useLocalSaolaClient ? {
            fs: { allow: [path.resolve(__dirname, '..')] },
        } : {}),
    },
});
