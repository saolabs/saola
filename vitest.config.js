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
        'resources/js/onejs/views/**',
        'resources/js/onejs/examples/**',
      ],
    },
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './resources/js/onejs'),
      '@core': path.resolve(__dirname, './resources/js/onejs/core'),
      '@helpers': path.resolve(__dirname, './resources/js/onejs/helpers'),
      '@services': path.resolve(__dirname, './resources/js/onejs/core/services'),
    },
  },
});
