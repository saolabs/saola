/**
 * ĐƯỢC SINH TỰ ĐỘNG bởi @saolabs/builder — đừng sửa file này.
 * Sinh lúc: 2026-09-05T04:44:32.949Z
 *
 * Muốn thêm provider / service / helper thì sửa:
 *   resources/saola/_app/bootstrap.ts     (mọi context)
 *   resources/saola/web/app/bootstrap.ts     (riêng web)
 */

import * as SaolaRuntime from '@saolabs/client';
import { app, App, mergeBundles, bootBundles } from '@saolabs/client';
import registry from './web/registry.js';
import sharedBundle from '@sao/_app/bootstrap';
import contextBundle from '@sao/web/app/bootstrap';

const container = app();

// Namespace runtime cho script KHÔNG phải module (snippet Blade, plugin bên thứ
// ba) — chúng cần class View để dựng view, mà App chỉ là container.
if (typeof window !== 'undefined') window.Saola = SaolaRuntime;

// Bundle nguồn của chính app, gộp theo thứ tự: chung trước, context sau.
const own = mergeBundles([sharedBundle, contextBundle]);

// Top-level await sẽ đẩy build.target lên cao và làm hỏng vài đường phân tích
// tĩnh của rollup — dùng async IIFE.
(async () => {
    await App.start({
        view: {
            container: '#app-root',
            // Bundle nạp rời (theme) đè lên registry này, xử lý trong App.start.
            registry: { ...registry, ...own.views },
        },
        services: own.services,
        helpers: own.helpers,
        providers: own.providers,
    });
    bootBundles(own, container);
})();

// Đích của import map: theme build độc lập `import ... from '@saolabs/client'`
// resolve về CHÍNH FILE NÀY, nên hai bên dùng chung một instance runtime (§7).
// Cần `preserveEntrySignatures: 'exports-only'` trong vite.config, nếu không
// rollup tree-shake sạch khối export này.
export * from '@saolabs/client';
export { container as App, registry };
