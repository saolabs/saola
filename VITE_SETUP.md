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

This runs 3 concurrent processes (`server`, `vite`, `client`):
1. Starts Laravel at `http://127.0.0.1:8080`
2. Starts Vite/HMR at `http://127.0.0.1:5173`
3. Compiles `.sao` through the Saola Vite plugin
4. Watches and auto-reloads on changes to:
   - `resources/saola/*/views/**` (.sao views) → recompile + full reload
   - `resources/saola/*/app/**` (helpers/services) → recompile + full reload
   - `app/**`, `routes/**`, `resources/views/**`, `lang/**` (PHP) → browser full reload
   - `../client/dist/**` — the local `@saolabs/client` is watched via `tsc --watch`
     (the `client` process), so editing the client lib hot-reloads too

> Note: `php artisan serve` re-interprets PHP each request, so Controller/Model
> edits take effect on the next request without a server restart. Editing `.env`
> still needs a manual restart (`--no-reload` disables the env watcher).

Open the Laravel URL (`http://127.0.0.1:8080`), not the Vite asset URL.

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
│ • Laravel                                                │
│   - Serves the application at 127.0.0.1:8080            │
│                                                          │
│ • Vite + Saola compiler plugin                           │
│   - Compiles resources/saola/web/views/**/*.sao         │
│   - Outputs client views to resources/js/saola/web      │
│   - Outputs Blade views to resources/views/web          │
│   - Serves HMR at 127.0.0.1:5173                        │
│   - Recompiles and reloads after .sao changes           │
└──────────────────────────────────────────────────────────┘
```

### File Structure

```
resources/saola/web/            ← SOURCE (.sao templates, app code)
  ├── views/
  │   ├── home.sao
  │   ├── counter.sao
  │   └── ...
  └── app/
      ├── helpers/
      └── services/

resources/js/saola/web/         ← COMPILED (Vite bundles this)
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

public/static/saola/web/js/     ← VITE OUTPUT (production)
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
    host: '127.0.0.1',
    port: 5173,
    hmr: {
        host: '127.0.0.1',
        port: 5173,
    },
}
```

**What it does**:
- Browser connects to WebSocket at `ws://127.0.0.1:5173`
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
1. Laravel is running at 127.0.0.1:8080 and Vite at 127.0.0.1:5173
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
| `npm run dev` | Dev mode web context + HMR (server + vite + client watch) |
| `npm run dev:web` | Dev mode web context |
| `npm run dev:client` | Watch/rebuild local `@saolabs/client` (`tsc --watch`) |
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
