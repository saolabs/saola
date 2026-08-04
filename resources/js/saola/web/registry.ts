/**
 * Auto-generated View Registry for web context
 * Generated at: 2026-08-02T11:34:52.257Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/web/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import WebModulesHomeArchitecture from './views/modules/home/architecture.js';
import WebModulesHomeAbout from './views/modules/home/about.js';
import WebModulesHomeContact from './views/modules/home/contact.js';
import WebModulesDemoFeaturecard from './views/modules/demo/featurecard.js';
import WebLayoutsBase from './views/layouts/base.js';
import WebModulesHomeRuntime from './views/modules/home/runtime.js';
import WebLayoutsPublic from './views/layouts/public.js';
import WebLayoutsWorkspace from './views/layouts/workspace.js';
import WebModulesDemoIndex from './views/modules/demo/index.js';
import WebModulesPostsList from './views/modules/posts/list.js';
import WebModulesHomeIndex from './views/modules/home/index.js';
import WebModulesHomeTerms from './views/modules/home/terms.js';
import WebModulesHomeTodo from './views/modules/home/todo.js';
import WebModulesHomeGettingStarted from './views/modules/home/getting-started.js';
import WebModulesPingIndex from './views/modules/ping/index.js';
import WebModulesHomePrivacy from './views/modules/home/privacy.js';
import WebModulesHomeCompiler from './views/modules/home/compiler.js';
import WebPartialsHead from './views/partials/head.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'web.modules.home.architecture': WebModulesHomeArchitecture,
    'web.modules.home.about': WebModulesHomeAbout,
    'web.modules.home.contact': WebModulesHomeContact,
    'web.modules.demo.featurecard': WebModulesDemoFeaturecard,
    'web.layouts.base': WebLayoutsBase,
    'web.modules.home.runtime': WebModulesHomeRuntime,
    'web.layouts.public': WebLayoutsPublic,
    'web.layouts.workspace': WebLayoutsWorkspace,
    'web.modules.demo.index': WebModulesDemoIndex,
    'web.modules.posts.list': WebModulesPostsList,
    'web.modules.home.index': WebModulesHomeIndex,
    'web.modules.home.terms': WebModulesHomeTerms,
    'web.modules.home.todo': WebModulesHomeTodo,
    'web.modules.home.getting-started': WebModulesHomeGettingStarted,
    'web.modules.ping.index': WebModulesPingIndex,
    'web.modules.home.privacy': WebModulesHomePrivacy,
    'web.modules.home.compiler': WebModulesHomeCompiler,
    'web.partials.head': WebPartialsHead
};

export default ViewRegistry;
