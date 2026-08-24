import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
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
      '@web': path.resolve(__dirname, './resources/saola/web'),
      '@admin': path.resolve(__dirname, './resources/saola/admin'),
      '@mobile': path.resolve(__dirname, './resources/saola/mobile'),
    },
  },
});
