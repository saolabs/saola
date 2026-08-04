/**
 * Auto-generated View Registry for web context
 * Generated at: 2026-08-04T03:46:28.775Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/web/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import WebModulesPingIndex from './views/modules/ping/index.js';
import WebModulesHomeContact from './views/modules/home/contact.js';
import WebModulesHomeArchitecture from './views/modules/home/architecture.js';
import WebModulesHomeCompiler from './views/modules/home/compiler.js';
import WebModulesHomeTerms from './views/modules/home/terms.js';
import WebPartialsHead from './views/partials/head.js';
import WebModulesHomeTodo from './views/modules/home/todo.js';
import WebLayoutsPublic from './views/layouts/public.js';
import WebModulesHomeIndex from './views/modules/home/index.js';
import WebModulesDemoFeaturecard from './views/modules/demo/featurecard.js';
import WebModulesHomePrivacy from './views/modules/home/privacy.js';
import WebModulesHomeGettingStarted from './views/modules/home/getting-started.js';
import WebLayoutsBase from './views/layouts/base.js';
import WebLayoutsWorkspace from './views/layouts/workspace.js';
import WebModulesHomeAbout from './views/modules/home/about.js';
import WebModulesPostsList from './views/modules/posts/list.js';
import WebModulesHomeRuntime from './views/modules/home/runtime.js';
import WebModulesDemoIndex from './views/modules/demo/index.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'web.modules.ping.index': WebModulesPingIndex,
    'web.modules.home.contact': WebModulesHomeContact,
    'web.modules.home.architecture': WebModulesHomeArchitecture,
    'web.modules.home.compiler': WebModulesHomeCompiler,
    'web.modules.home.terms': WebModulesHomeTerms,
    'web.partials.head': WebPartialsHead,
    'web.modules.home.todo': WebModulesHomeTodo,
    'web.layouts.public': WebLayoutsPublic,
    'web.modules.home.index': WebModulesHomeIndex,
    'web.modules.demo.featurecard': WebModulesDemoFeaturecard,
    'web.modules.home.privacy': WebModulesHomePrivacy,
    'web.modules.home.getting-started': WebModulesHomeGettingStarted,
    'web.layouts.base': WebLayoutsBase,
    'web.layouts.workspace': WebLayoutsWorkspace,
    'web.modules.home.about': WebModulesHomeAbout,
    'web.modules.posts.list': WebModulesPostsList,
    'web.modules.home.runtime': WebModulesHomeRuntime,
    'web.modules.demo.index': WebModulesDemoIndex
};

export default ViewRegistry;
