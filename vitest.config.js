import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    // E2E cần server chạy + Chromium thật → tách khỏi `npm test` (đang là watch
    // mode: mỗi lần lưu file sẽ spawn lại browser). Chạy bằng `npm run test:e2e`.
    exclude: ['**/node_modules/**', '**/dist/**', 'tests/e2e/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.spec.js',
        '**/*.test.js',
        'resources/js/saola/**',
      ],
    },
  },
  resolve: {
    // Giữ khớp với vite.config.js + tsconfig.json.
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
      '@sao': path.resolve(__dirname, './resources/saola'),
      '@app': path.resolve(__dirname, './resources/saola/_app'),
      '@web': path.resolve(__dirname, './resources/saola/web'),
      '@admin': path.resolve(__dirname, './resources/saola/admin'),
      '@mobile': path.resolve(__dirname, './resources/saola/mobile'),
    },
  },
});
