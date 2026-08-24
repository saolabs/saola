import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import saolaCompiler from '@saolabs/compiler/vite';
import path from 'path';

const context = process.env.VITE_CONTEXT || 'web';
const useLocalSaolaClient = process.env.SAOLA_LOCAL_CLIENT === 'true';
const devHost = process.env.VITE_DEV_HOST || '127.0.0.1';
const hmrHost = process.env.VITE_HMR_HOST || '127.0.0.1';
const devPort = Number(process.env.VITE_DEV_PORT || 5173);
const hmrClientPort = Number(process.env.VITE_HMR_CLIENT_PORT || devPort);

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
            // Source directories (for IDE and Vite dev).
            // Alias gốc theo context → '@web/app', '@web/assets', '@web/views'…
            // PHẢI khớp "paths" trong tsconfig.json, nếu không IDE báo đỏ còn
            // Vite vẫn build được (hoặc ngược lại).
            '@': path.resolve(__dirname, 'resources/js'),
            '@sao': path.resolve(__dirname, 'resources/saola'),
            '@web': path.resolve(__dirname, 'resources/saola/web'),
            '@admin': path.resolve(__dirname, 'resources/saola/admin'),
            '@mobile': path.resolve(__dirname, 'resources/saola/mobile'),
            
            // Compiled directories
            '@compiled': path.resolve(__dirname, 'resources/js/saola'),
            '@views': path.resolve(__dirname, `resources/js/saola/${context}`),
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
    publicDir: false,
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
                    return 'assets/[name]-[hash].[ext]';
                }
            }
        }
    },
    server: {
        host: devHost,
        port: devPort,
        strictPort: true,
        hmr: {
            host: hmrHost,
            port: devPort,
            clientPort: hmrClientPort,
        },
        // The local client lives outside this project root (../client/dist).
        // Allow Vite to read+watch it so tsc --watch rebuilds hot-reload.
        ...(useLocalSaolaClient ? {
            fs: { allow: [path.resolve(__dirname, '..')] },
        } : {}),
    },
});
