/**
 * Auto-generated View Registry for web context
 * Generated at: 2026-08-23T15:00:20.626Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/web/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import WebModulesDocsCompiler from './views/modules/docs/compiler.js';
import WebModulesDemoFeaturecard from './views/modules/demo/featurecard.js';
import WebLayoutsDocs from './views/layouts/docs.js';
import WebModulesHomePrivacy from './views/modules/home/privacy.js';
import WebLayoutsBase from './views/layouts/base.js';
import WebModulesDocsArchitecture from './views/modules/docs/architecture.js';
import WebLayoutsWorkspace from './views/layouts/workspace.js';
import WebModulesDocsBuild from './views/modules/docs/build.js';
import WebModulesComponentsStatcard from './views/modules/components/statcard.js';
import WebLayoutsPublic from './views/layouts/public.js';
import WebModulesDocsStatus from './views/modules/docs/status.js';
import WebModulesDocsSaoFile from './views/modules/docs/sao-file.js';
import WebModulesDocsIndex from './views/modules/docs/index.js';
import WebModulesHomeAbout from './views/modules/home/about.js';
import WebModulesDocsRuntime from './views/modules/docs/runtime.js';
import WebModulesDocsContexts from './views/modules/docs/contexts.js';
import WebModulesDocsRouter from './views/modules/docs/router.js';
import WebModulesDocsLifecycle from './views/modules/docs/lifecycle.js';
import WebModulesDocsReactivity from './views/modules/docs/reactivity.js';
import WebPartialsHead from './views/partials/head.js';
import WebModulesDocsGettingStarted from './views/modules/docs/getting-started.js';
import WebModulesPostsList from './views/modules/posts/list.js';
import WebModulesRosterIndex from './views/modules/roster/index.js';
import WebModulesPingIndex from './views/modules/ping/index.js';
import WebModulesStressUsercard from './views/modules/stress/usercard.js';
import WebModulesHomeContact from './views/modules/home/contact.js';
import WebModulesHomeTodo from './views/modules/home/todo.js';
import WebModulesRosterItem from './views/modules/roster/item.js';
import WebModulesHomeTerms from './views/modules/home/terms.js';
import WebModulesStressIndex from './views/modules/stress/index.js';
import WebModulesDocsDirectives from './views/modules/docs/directives.js';
import WebModulesComponentsIndex from './views/modules/components/index.js';
import WebModulesHomeIndex from './views/modules/home/index.js';
import WebModulesDemoIndex from './views/modules/demo/index.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'web.modules.docs.compiler': WebModulesDocsCompiler,
    'web.modules.demo.featurecard': WebModulesDemoFeaturecard,
    'web.layouts.docs': WebLayoutsDocs,
    'web.modules.home.privacy': WebModulesHomePrivacy,
    'web.layouts.base': WebLayoutsBase,
    'web.modules.docs.architecture': WebModulesDocsArchitecture,
    'web.layouts.workspace': WebLayoutsWorkspace,
    'web.modules.docs.build': WebModulesDocsBuild,
    'web.modules.components.statcard': WebModulesComponentsStatcard,
    'web.layouts.public': WebLayoutsPublic,
    'web.modules.docs.status': WebModulesDocsStatus,
    'web.modules.docs.sao-file': WebModulesDocsSaoFile,
    'web.modules.docs.index': WebModulesDocsIndex,
    'web.modules.home.about': WebModulesHomeAbout,
    'web.modules.docs.runtime': WebModulesDocsRuntime,
    'web.modules.docs.contexts': WebModulesDocsContexts,
    'web.modules.docs.router': WebModulesDocsRouter,
    'web.modules.docs.lifecycle': WebModulesDocsLifecycle,
    'web.modules.docs.reactivity': WebModulesDocsReactivity,
    'web.partials.head': WebPartialsHead,
    'web.modules.docs.getting-started': WebModulesDocsGettingStarted,
    'web.modules.posts.list': WebModulesPostsList,
    'web.modules.roster.index': WebModulesRosterIndex,
    'web.modules.ping.index': WebModulesPingIndex,
    'web.modules.stress.usercard': WebModulesStressUsercard,
    'web.modules.home.contact': WebModulesHomeContact,
    'web.modules.home.todo': WebModulesHomeTodo,
    'web.modules.roster.item': WebModulesRosterItem,
    'web.modules.home.terms': WebModulesHomeTerms,
    'web.modules.stress.index': WebModulesStressIndex,
    'web.modules.docs.directives': WebModulesDocsDirectives,
    'web.modules.components.index': WebModulesComponentsIndex,
    'web.modules.home.index': WebModulesHomeIndex,
    'web.modules.demo.index': WebModulesDemoIndex
};

export default ViewRegistry;
