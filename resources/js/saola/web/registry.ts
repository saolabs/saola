/**
 * Auto-generated View Registry for web context
 * Generated at: 2026-07-26T02:33:38.331Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/web/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import WebLayoutsPublic from './views/layouts/public.js';
import WebLayoutsWorkspace from './views/layouts/workspace.js';
import WebModulesHomeTerms from './views/modules/home/terms.js';
import WebModulesHomeAbout from './views/modules/home/about.js';
import WebModulesHomeTodo from './views/modules/home/todo.js';
import WebPartialsHead from './views/partials/head.js';
import WebModulesHomeIndex from './views/modules/home/index.js';
import WebModulesHomeContact from './views/modules/home/contact.js';
import WebLayoutsBase from './views/layouts/base.js';
import WebModulesHomePrivacy from './views/modules/home/privacy.js';
import WebModulesPostsList from './views/modules/posts/list.js';
import WebModulesPingIndex from './views/modules/ping/index.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'web.layouts.public': WebLayoutsPublic,
    'web.layouts.workspace': WebLayoutsWorkspace,
    'web.modules.home.terms': WebModulesHomeTerms,
    'web.modules.home.about': WebModulesHomeAbout,
    'web.modules.home.todo': WebModulesHomeTodo,
    'web.partials.head': WebPartialsHead,
    'web.modules.home.index': WebModulesHomeIndex,
    'web.modules.home.contact': WebModulesHomeContact,
    'web.layouts.base': WebLayoutsBase,
    'web.modules.home.privacy': WebModulesHomePrivacy,
    'web.modules.posts.list': WebModulesPostsList,
    'web.modules.ping.index': WebModulesPingIndex
};

export default ViewRegistry;
