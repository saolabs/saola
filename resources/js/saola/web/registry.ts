/**
 * Auto-generated View Registry for web context
 * Generated at: 2026-07-24T16:47:59.288Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/web/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import WebLayoutsBase from './views/layouts/base.js';
import WebLayoutsWorkspace from './views/layouts/workspace.js';
import WebLayoutsPublic from './views/layouts/public.js';
import WebModulesHomePrivacy from './views/modules/home/privacy.js';
import WebModulesHomeContact from './views/modules/home/contact.js';
import WebModulesHomeTerms from './views/modules/home/terms.js';
import WebPartialsHead from './views/partials/head.js';
import WebModulesHomeIndex from './views/modules/home/index.js';
import WebModulesHomeAbout from './views/modules/home/about.js';
import WebModulesPingIndex from './views/modules/ping/index.js';
import WebModulesPostsList from './views/modules/posts/list.js';
import WebModulesHomeTodo from './views/modules/home/todo.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'web.layouts.base': WebLayoutsBase,
    'web.layouts.workspace': WebLayoutsWorkspace,
    'web.layouts.public': WebLayoutsPublic,
    'web.modules.home.privacy': WebModulesHomePrivacy,
    'web.modules.home.contact': WebModulesHomeContact,
    'web.modules.home.terms': WebModulesHomeTerms,
    'web.partials.head': WebPartialsHead,
    'web.modules.home.index': WebModulesHomeIndex,
    'web.modules.home.about': WebModulesHomeAbout,
    'web.modules.ping.index': WebModulesPingIndex,
    'web.modules.posts.list': WebModulesPostsList,
    'web.modules.home.todo': WebModulesHomeTodo
};

export default ViewRegistry;
