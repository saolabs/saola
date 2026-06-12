/**
 * Auto-generated View Registry for web context
 * Generated at: 2026-03-08T16:45:59.423Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/web/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import { WebLayoutsSimple } from './views/layouts/simple.js';
import { WebLayoutsBase } from './views/layouts/base.js';
import { WebPagesHome } from './views/pages/home.js';
import { WebPagesAwaitData } from './views/pages/await-data.js';
import { WebWebInput } from './views/web/input.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'web.layouts.simple': WebLayoutsSimple,
    'web.layouts.base': WebLayoutsBase,
    'web.pages.home': WebPagesHome,
    'web.pages.await-data': WebPagesAwaitData,
    'web.web.input': WebWebInput
};

export default ViewRegistry;
