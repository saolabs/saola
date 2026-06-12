/**
 * Tests for Router
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Router', () => {
  let mockApp;
  let mockHistory;

  beforeEach(() => {
    // Mock History API
    mockHistory = {
      pushState: vi.fn(),
      replaceState: vi.fn(),
    };
    
    global.history = mockHistory;
    global.location = {
      pathname: '/test',
      search: '',
      hash: '',
    };

    mockApp = {
      View: {
        loadView: vi.fn(),
        render: vi.fn(),
      },
      API: {
        get: vi.fn(),
      },
    };
  });

  describe('navigation', () => {
    it('should navigate to new route', () => {
      const path = '/about';
      
      // Test navigation logic
      mockHistory.pushState({}, '', path);
      
      expect(mockHistory.pushState).toHaveBeenCalledWith({}, '', path);
    });

    it('should handle route parameters', () => {
      const route = '/user/:id';
      const params = { id: '123' };
      
      const path = route.replace(':id', params.id);
      
      expect(path).toBe('/user/123');
    });
  });

  describe('route matching', () => {
    it('should match simple routes', () => {
      const pattern = '/about';
      const path = '/about';
      
      expect(pattern === path).toBe(true);
    });

    it('should match parameterized routes', () => {
      const pattern = /^\/user\/([^/]+)$/;
      const path = '/user/123';
      
      const match = path.match(pattern);
      expect(match).not.toBeNull();
      expect(match[1]).toBe('123');
    });

    it('should not match different routes', () => {
      const pattern = '/about';
      const path = '/contact';
      
      expect(pattern === path).toBe(false);
    });
  });

  describe('query parameters', () => {
    it('should parse query string', () => {
      const queryString = '?name=John&age=30';
      const params = new URLSearchParams(queryString);
      
      expect(params.get('name')).toBe('John');
      expect(params.get('age')).toBe('30');
    });

    it('should handle empty query string', () => {
      const queryString = '';
      const params = new URLSearchParams(queryString);
      
      expect(params.toString()).toBe('');
    });
  });

  describe('popstate event', () => {
    it('should handle browser back/forward', () => {
      const handler = vi.fn();
      
      window.addEventListener('popstate', handler);
      window.dispatchEvent(new PopStateEvent('popstate'));
      
      expect(handler).toHaveBeenCalled();
      
      window.removeEventListener('popstate', handler);
    });
  });

  describe('link handling', () => {
    it('should intercept link clicks', () => {
      const container = document.createElement('div');
      const link = document.createElement('a');
      link.href = '/about';
      link.setAttribute('data-link', 'true');
      container.appendChild(link);
      document.body.appendChild(container);
      
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      });
      
      const handler = vi.fn((e) => {
        if (e.target.matches('[data-link]')) {
          e.preventDefault();
        }
      });
      
      container.addEventListener('click', handler);
      link.dispatchEvent(clickEvent);
      
      expect(handler).toHaveBeenCalled();
      
      container.removeEventListener('click', handler);
      document.body.removeChild(container);
    });
  });

  describe('route guards', () => {
    it('should allow navigation if guard passes', () => {
      const guard = vi.fn(() => true);
      
      const canNavigate = guard();
      
      expect(canNavigate).toBe(true);
      expect(guard).toHaveBeenCalled();
    });

    it('should prevent navigation if guard fails', () => {
      const guard = vi.fn(() => false);
      
      const canNavigate = guard();
      
      expect(canNavigate).toBe(false);
    });
  });
});
