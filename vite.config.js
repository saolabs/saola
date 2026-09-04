import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import saolaBuilder from '@saolabs/builder/vite';
import path from 'path';
import fs from 'node:fs';

const context = process.env.VITE_CONTEXT || 'web';

/**
 * Đồng bộ assets tĩnh (ảnh/css/font referenced-by-URL) từ chỗ author
 * `resources/saola/<ctx>/assets/` → `public/static/saola/<ctx>/assets/`.
 *
 * Vì SSR/Blade tham chiếu asset bằng chuỗi URL (`asset('static/saola/…')`),
 * không phải `import`, nên module graph của Vite không thấy chúng. Plugin này
 * copy nguyên thư mục:
 *   - dev  : mirror sang public/ để `php artisan serve` trả về (buildStart + watch)
 *   - build: copy trong `writeBundle` — CHẠY SAU khi Vite đã emptyOutDir + ghi
 *            bundle, nên assets không bao giờ bị nuốt.
 * `resources/js/saola/<ctx>/assets/` không đụng tới; đây là đường thẳng source → output.
 */
function saolaAssets({ context, root }) {
    const src = path.resolve(root, `resources/saola/${context}/assets`);
    const publicDest = path.resolve(root, `public/static/saola/${context}/assets`);
    let isBuild = false;

    // Copy đệ quy bằng copyFileSync — KHÔNG dùng fs.cpSync (EACCES trên FUSE của
    // Docker Desktop) và KHÔNG rmSync cây đích trước (cũng EACCES). Đổi lại: file
    // xoá khỏi source còn sót ở đích — vô hại với asset tĩnh; `git clean` cây
    // gitignore nếu cần mirror tuyệt đối. Không bao giờ throw: hỏng copy chỉ warn,
    // tuyệt đối không làm sập buildStart (kéo sập luôn dev server).
    const copyDir = (from, to) => {
        fs.mkdirSync(to, { recursive: true });
        for (const e of fs.readdirSync(from, { withFileTypes: true })) {
            const s = path.join(from, e.name);
            const d = path.join(to, e.name);
            if (e.isDirectory()) copyDir(s, d);
            else fs.copyFileSync(s, d);
        }
    };
    const sync = (dest) => {
        try {
            if (fs.existsSync(src)) copyDir(src, dest);
        } catch (e) {
            console.warn(`[saola-assets] copy ${src} → ${dest} skipped: ${e.message}`);
        }
    };

    return {
        name: 'saola-assets',
        configResolved(c) { isBuild = c.command === 'build'; },
        buildStart() { if (!isBuild) sync(publicDest); },
        writeBundle(out) { sync(path.join(out.dir, 'assets')); },
        configureServer(server) {
            server.watcher.add(src);
            const onEvt = (file) => {
                if (!file.startsWith(src + path.sep)) return;
                sync(publicDest);
                server.ws.send({ type: 'full-reload' });
            };
            server.watcher.on('add', onEvt).on('change', onEvt).on('unlink', onEvt);
        },
    };
}
const useLocalSaolaClient = process.env.SAOLA_LOCAL_CLIENT === 'true';
const devHost = process.env.VITE_DEV_HOST || '127.0.0.1';
const hmrHost = process.env.VITE_HMR_HOST || '127.0.0.1';
const devPort = Number(process.env.VITE_DEV_PORT || 5173);
const hmrClientPort = Number(process.env.VITE_HMR_CLIENT_PORT || devPort);

export default defineConfig({
    plugins: [
        // Builder owns the initial .sao build and its single dev watcher.
        saolaBuilder({ context, watch: true }),
        // Static assets co-located with views: resources/saola/<ctx>/assets → public/static/saola/<ctx>/assets
        saolaAssets({ context, root: __dirname }),
        laravel({
            input: [
                `resources/js/saola/app.${context}.js`,  // Entry SINH RA bởi builder
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
            // Source directories (for IDE and Vite dev) — trỏ CÂY SOURCE, là chỗ
            // hand-write duy nhất. Alias gốc theo context → '@web/app' (service/helper,
            // import trong <script setup> của .sao), '@web/assets' (asset import-by-JS
            // để Vite hash; asset referenced-by-URL đi qua plugin saolaAssets ở trên),
            // '@web/views'. PHẢI khớp "paths" trong tsconfig.json.
            '@': path.resolve(__dirname, 'resources/js'),
            '@sao': path.resolve(__dirname, 'resources/saola'),
            '@app': path.resolve(__dirname, 'resources/saola/_app'),
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
            // Entry phải GIỮ export: import map của theme trỏ `@saolabs/client`
            // về chính file này, nên `export * from '@saolabs/client'` trong
            // entry phải sống sót tree-shaking. Vite mặc định DROP export của
            // entry chunk — thiếu dòng này thì theme nhận một module rỗng và
            // hỏng câm. Đã đo: docs/EXTENSION_ARCHITECTURE.md §7.2a.
            preserveEntrySignatures: 'exports-only',
            output: {
                // KHÔNG dùng 'js/[name].js': hai entry `app.js` và `app.css`
                // cùng tên rollup 'app', rollup né trùng bằng hậu tố số nên JS
                // rơi ra `js/app2.js`. Lấy tên từ chính file nguồn để `app.js`
                // ổn định qua mọi lần build (manifest vẫn map đúng, nhưng
                // fallback 'js/app.js' trong assets.blade.php cần tên này).
                entryFileNames: (chunk) => {
                    const src = chunk.facadeModuleId;
                    const name = src
                        ? path.basename(src).replace(/\.[cm]?[jt]sx?$/, '')
                        : chunk.name;
                    return `js/${name}.js`;
                },
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
        watch: {
            // Laravel ghi vào storage/ trong lúc chạy: log, session, cache view,
            // và cả dữ liệu demo (storage/data/users.json của /roster). Nằm trong
            // root nên Vite coi mỗi lần ghi là một thay đổi và bắn full-reload —
            // mỗi POST/PUT lại nạp lại cả trang GIỮA lúc người dùng đang thao tác,
            // trông y như form submit không bị preventDefault.
            ignored: ['**/storage/**'],
        },
        // The local client lives outside this project root (../client/dist).
        // Allow Vite to read+watch it so tsc --watch rebuilds hot-reload.
        ...(useLocalSaolaClient ? {
            fs: { allow: [path.resolve(__dirname, '..')] },
        } : {}),
    },
});
