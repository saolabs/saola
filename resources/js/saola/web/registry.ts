/**
 * Auto-generated View Registry for web context
 * Generated at: 2026-06-23T23:48:19.049Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/web/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import WebLayoutsBase from './views/layouts/base.js';
import WebPartialsHead from './views/partials/head.js';
import WebModulesHomeIndex from './views/modules/home/index.js';
import WebModulesPingIndex from './views/modules/ping/index.js';
import WebModulesPostsList from './views/modules/posts/list.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'web.layouts.base': WebLayoutsBase,
    'web.partials.head': WebPartialsHead,
    'web.modules.home.index': WebModulesHomeIndex,
    'web.modules.ping.index': WebModulesPingIndex,
    'web.modules.posts.list': WebModulesPostsList
};

export default ViewRegistry;
