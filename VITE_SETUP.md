# Saola View + Vite Development Setup

> **Updated**: 7/3/2026 | **Purpose**: Local development with Vite hot module replacement (HMR) and context-based builds

---

## Quick Start

### Development (watch mode with HMR)

```bash
# Default context (web)
npm run dev

# Specific context
npm run dev:web
npm run dev:admin
npm run dev:mobile
```

This runs:
1. Compiles `.sao` templates → `.blade.php` + `.ts/.js` files
2. Starts Vite dev server (http://localhost:5173)
3. Watches for changes and hot-reloads

### Production Build

```bash
# Default context (web)
npm run build

# Specific context
npm run build:web
npm run build:admin
npm run build:mobile
npm run build:all          # All contexts at once
```

---

## What's Happening

### Development Flow

```
┌──────────────────────────────────────────────────────────┐
│ 1. npm run dev:web                                       │
├──────────────────────────────────────────────────────────┤
│ • npm run build:views:web                                │
│   - Compiles resources/one/web/**/*.sao                 │
│   - Outputs: resources/js/one/web/views/*.ts            │
│   - Outputs: resources/views/web/*.blade.php            │
│                                                          │
│ • vite (VITE_CONTEXT=web)                              │
│   - Serves resources/js/one/app.js                       │
│   - HMR enabled on http://localhost:5173                │
│   - Watches for any TS/JS/CSS changes                   │
│   - Instant reload via WebSocket                        │
│                                                          │
│ • Laravel dev server continues running                  │
│   - Renders .blade.php templates                        │
│   - Loads Vite bundle with HMR                          │
└──────────────────────────────────────────────────────────┘
```

### File Structure

```
resources/one/web/              ← SOURCE (.sao templates, app code)
  ├── views/
  │   ├── home.sao
  │   ├── counter.sao
  │   └── ...
  └── app/
      ├── helpers/
      └── services/

resources/js/one/web/           ← COMPILED (Vite bundles this)
  ├── app.js                    ← Entry point
  ├── views/
  │   ├── home.ts
  │   ├── counter.ts
  │   └── ...
  ├── registry.ts              ← View registry
  └── registry.js              ← JS version

resources/views/web/            ← BLADE OUTPUT (Laravel renders)
  ├── home.blade.php
  ├── counter.blade.php
  └── ...

public/static/one/web/js/       ← VITE OUTPUT (production)
  └── app.js                    ← Final bundle
```

---

## Environment Variables

### VITE_CONTEXT

Controls which context is being built. Vite config reads this:

```bash
# For dev
VITE_CONTEXT=web vite

# For build
VITE_CONTEXT=admin vite build
```

**Values**: `web`, `admin`, `mobile`, `default`

**Default**: `web`

---

## HMR Configuration

Vite HMR settings (vite.config.js):

```javascript
server: {
    hmr: {
        host: 'localhost',
        port: 5173,
    },
}
```

**What it does**:
- Browser connects to WebSocket at `ws://localhost:5173`
- Updates module when code changes
- Preserves component state during reload

---

## Advantages Over Webpack

| Feature | Vite | Webpack |
|---------|------|---------|
| Dev server startup | ~100ms | ~5s |
| HMR speed | Instant | ~2s |
| Memory usage | Lower | Higher |
| Build time | Fast | Slower |
| Configuration | Simpler | Complex |
| Mobile app support | ✅ Easy | ⚠️ Harder |

---

## Troubleshooting

### Issue: `Can't resolve view runtime package`

**Solution**: Make sure the Saola view runtime package (`oneview`) is installed and built

```bash
cd ../oneview
npm run build
cd ../saola
npm install
```

### Issue: HMR not working

**Check**:
1. Vite dev server running at localhost:5173
2. Browser WebSocket connection (DevTools → Network)
3. Check vite.config.js HMR settings

### Issue: Blade templates not rendering

**Solution**: Templates must compile first

```bash
npm run build:views:web    # Compile .sao → .blade.php
```

### Issue: Old build cached in browser

**Fix**: Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

---

## Commands Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev mode web context + HMR |
| `npm run dev:web` | Dev mode web context |
| `npm run dev:admin` | Dev mode admin context |
| `npm run dev:mobile` | Dev mode mobile context |
| `npm run build` | Production build web context |
| `npm run build:web` | Production build web |
| `npm run build:admin` | Production build admin |
| `npm run build:mobile` | Production build mobile |
| `npm run build:all` | Build all contexts |
| `npm run build:views` | Compile .sao → .blade.php + TS (all contexts) |
| `npm run build:views:web` | Compile web templates only |
| `npm run dev:views` | Watch and auto-compile templates |
| `npm run test` | Run tests with Vitest |

---

## Mobile App Support (Future)

Vite enables easy mobile app builds:

```bash
# Future: Cordova/Capacitor build
npm run build:mobile

# Output: publicly/static/one/mobile/js/app.js
# Can be embedded in React Native, Capacitor, or Cordova
```

Since Vite outputs plain JavaScript bundles with no build-system dependencies, it's perfect for cross-platform native shells.

---

## Notes

- Vite uses **Rollup** for production builds (highly optimized)
- Dev server uses **esbuild** (extremely fast transpilation)
- ES modules are preserved in dev, optimized in production
- Source maps included for easy debugging

---

See Also:
- [Vite Documentation](https://vitejs.dev/)
- [LaravelVite Plugin](https://github.com/laravel/vite-plugin)
