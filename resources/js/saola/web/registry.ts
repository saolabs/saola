/**
 * Auto-generated View Registry for web context
 * Generated at: 2026-08-25T10:16:15.027Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/web/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import WebModulesDocsLifecycle from './views/modules/docs/lifecycle.js';
import WebModulesDocsReactivity from './views/modules/docs/reactivity.js';
import WebModulesDocsRouter from './views/modules/docs/router.js';
import WebModulesDocsRuntime from './views/modules/docs/runtime.js';
import WebModulesDocsSaoFile from './views/modules/docs/sao-file.js';
import WebModulesDocsStatus from './views/modules/docs/status.js';
import WebModulesHomeAbout from './views/modules/home/about.js';
import WebModulesHomeContact from './views/modules/home/contact.js';
import WebModulesHomeIndex from './views/modules/home/index.js';
import WebModulesHomePartsCompare from './views/modules/home/parts/compare.js';
import WebModulesHomePartsCta from './views/modules/home/parts/cta.js';
import WebModulesHomePartsFaq from './views/modules/home/parts/faq.js';
import WebModulesHomePartsFeatures from './views/modules/home/parts/features.js';
import WebModulesHomePartsFlowstep from './views/modules/home/parts/flowstep.js';
import WebModulesHomePartsHero from './views/modules/home/parts/hero.js';
import WebModulesHomePartsHow from './views/modules/home/parts/how.js';
import WebModulesHomePartsMapcard from './views/modules/home/parts/mapcard.js';
import WebModulesHomePartsOvcard from './views/modules/home/parts/ovcard.js';
import WebModulesHomePartsPrinciple from './views/modules/home/parts/principle.js';
import WebModulesHomePrivacy from './views/modules/home/privacy.js';
import WebModulesComponentsIndex from './views/modules/components/index.js';
import WebModulesDemoIndex from './views/modules/demo/index.js';
import WebLayoutsDocs from './views/layouts/docs.js';
import WebLayoutsBase from './views/layouts/base.js';
import WebLayoutsPublic from './views/layouts/public.js';
import WebLayoutsWorkspace from './views/layouts/workspace.js';
import WebModulesDocsDirectives from './views/modules/docs/directives.js';
import WebModulesComponentsStatcard from './views/modules/components/statcard.js';
import WebModulesDemoFeaturecard from './views/modules/demo/featurecard.js';
import WebModulesDocsBuild from './views/modules/docs/build.js';
import WebModulesDocsArchitecture from './views/modules/docs/architecture.js';
import WebModulesDocsCompiler from './views/modules/docs/compiler.js';
import WebModulesDocsContexts from './views/modules/docs/contexts.js';
import WebModulesDocsIndex from './views/modules/docs/index.js';
import WebModulesDocsGettingStarted from './views/modules/docs/getting-started.js';
import WebModulesStressUsercard from './views/modules/stress/usercard.js';
import WebPartialsHead from './views/partials/head.js';
import WebModulesRosterItem from './views/modules/roster/item.js';
import WebModulesStressIndex from './views/modules/stress/index.js';
import WebModulesPostsList from './views/modules/posts/list.js';
import WebModulesPingIndex from './views/modules/ping/index.js';
import WebModulesHomeTerms from './views/modules/home/terms.js';
import WebModulesHomeTodo from './views/modules/home/todo.js';
import WebModulesRosterIndex from './views/modules/roster/index.js';
import WebModulesHomePartsUsecase from './views/modules/home/parts/usecase.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'web.modules.docs.lifecycle': WebModulesDocsLifecycle,
    'web.modules.docs.reactivity': WebModulesDocsReactivity,
    'web.modules.docs.router': WebModulesDocsRouter,
    'web.modules.docs.runtime': WebModulesDocsRuntime,
    'web.modules.docs.sao-file': WebModulesDocsSaoFile,
    'web.modules.docs.status': WebModulesDocsStatus,
    'web.modules.home.about': WebModulesHomeAbout,
    'web.modules.home.contact': WebModulesHomeContact,
    'web.modules.home.index': WebModulesHomeIndex,
    'web.modules.home.parts.compare': WebModulesHomePartsCompare,
    'web.modules.home.parts.cta': WebModulesHomePartsCta,
    'web.modules.home.parts.faq': WebModulesHomePartsFaq,
    'web.modules.home.parts.features': WebModulesHomePartsFeatures,
    'web.modules.home.parts.flowstep': WebModulesHomePartsFlowstep,
    'web.modules.home.parts.hero': WebModulesHomePartsHero,
    'web.modules.home.parts.how': WebModulesHomePartsHow,
    'web.modules.home.parts.mapcard': WebModulesHomePartsMapcard,
    'web.modules.home.parts.ovcard': WebModulesHomePartsOvcard,
    'web.modules.home.parts.principle': WebModulesHomePartsPrinciple,
    'web.modules.home.privacy': WebModulesHomePrivacy,
    'web.modules.components.index': WebModulesComponentsIndex,
    'web.modules.demo.index': WebModulesDemoIndex,
    'web.layouts.docs': WebLayoutsDocs,
    'web.layouts.base': WebLayoutsBase,
    'web.layouts.public': WebLayoutsPublic,
    'web.layouts.workspace': WebLayoutsWorkspace,
    'web.modules.docs.directives': WebModulesDocsDirectives,
    'web.modules.components.statcard': WebModulesComponentsStatcard,
    'web.modules.demo.featurecard': WebModulesDemoFeaturecard,
    'web.modules.docs.build': WebModulesDocsBuild,
    'web.modules.docs.architecture': WebModulesDocsArchitecture,
    'web.modules.docs.compiler': WebModulesDocsCompiler,
    'web.modules.docs.contexts': WebModulesDocsContexts,
    'web.modules.docs.index': WebModulesDocsIndex,
    'web.modules.docs.getting-started': WebModulesDocsGettingStarted,
    'web.modules.stress.usercard': WebModulesStressUsercard,
    'web.partials.head': WebPartialsHead,
    'web.modules.roster.item': WebModulesRosterItem,
    'web.modules.stress.index': WebModulesStressIndex,
    'web.modules.posts.list': WebModulesPostsList,
    'web.modules.ping.index': WebModulesPingIndex,
    'web.modules.home.terms': WebModulesHomeTerms,
    'web.modules.home.todo': WebModulesHomeTodo,
    'web.modules.roster.index': WebModulesRosterIndex,
    'web.modules.home.parts.usecase': WebModulesHomePartsUsecase
};

export default ViewRegistry;
