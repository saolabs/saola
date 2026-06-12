/**
 * Test setup file for Vitest
 * Configures global test environment
 */

import { expect, afterEach, vi } from 'vitest';

// No need for cleanup import in vitest 3+
// Environment is automatically cleaned between tests

// Mock window.APP_CONFIGS for tests
global.APP_CONFIGS = {
  base_url: 'http://localhost',
  router_mode: 'history',
  csrf_token: 'test-token',
  debug: false,
};

// Mock console methods in tests (can be overridden)
global.console = {
  ...console,
  log: vi.fn(),
  debug: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
};
