/**
 * Auto-generated View Registry for web context
 * Generated at: 2026-08-24T11:06:46.184Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/web/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import WebLayoutsBase from './views/layouts/base.js';
import WebModulesHomeIndex from './views/modules/home/index.js';
import WebModulesDocsGettingStarted from './views/modules/docs/getting-started.js';
import WebModulesDocsBuild from './views/modules/docs/build.js';
import WebLayoutsPublic from './views/layouts/public.js';
import WebLayoutsWorkspace from './views/layouts/workspace.js';
import WebModulesHomePartsFeatures from './views/modules/home/parts/features.js';
import WebModulesHomePartsCta from './views/modules/home/parts/cta.js';
import WebModulesDemoFeaturecard from './views/modules/demo/featurecard.js';
import WebModulesHomePartsFlowstep from './views/modules/home/parts/flowstep.js';
import WebLayoutsDocs from './views/layouts/docs.js';
import WebModulesHomePartsFaq from './views/modules/home/parts/faq.js';
import WebModulesDocsArchitecture from './views/modules/docs/architecture.js';
import WebModulesDocsStatus from './views/modules/docs/status.js';
import WebModulesHomePartsCompare from './views/modules/home/parts/compare.js';
import WebModulesDocsLifecycle from './views/modules/docs/lifecycle.js';
import WebPartialsHead from './views/partials/head.js';
import WebModulesComponentsStatcard from './views/modules/components/statcard.js';
import WebModulesHomePartsHero from './views/modules/home/parts/hero.js';
import WebModulesHomeAbout from './views/modules/home/about.js';
import WebModulesHomePartsPrinciple from './views/modules/home/parts/principle.js';
import WebModulesDocsContexts from './views/modules/docs/contexts.js';
import WebModulesDocsRuntime from './views/modules/docs/runtime.js';
import WebModulesDocsRouter from './views/modules/docs/router.js';
import WebModulesHomeTerms from './views/modules/home/terms.js';
import WebModulesHomeContact from './views/modules/home/contact.js';
import WebModulesDocsSaoFile from './views/modules/docs/sao-file.js';
import WebModulesHomePartsUsecase from './views/modules/home/parts/usecase.js';
import WebModulesPostsList from './views/modules/posts/list.js';
import WebModulesHomePartsOvcard from './views/modules/home/parts/ovcard.js';
import WebModulesStressUsercard from './views/modules/stress/usercard.js';
import WebModulesHomePartsHow from './views/modules/home/parts/how.js';
import WebModulesDocsCompiler from './views/modules/docs/compiler.js';
import WebModulesDocsReactivity from './views/modules/docs/reactivity.js';
import WebModulesRosterIndex from './views/modules/roster/index.js';
import WebModulesHomePartsMapcard from './views/modules/home/parts/mapcard.js';
import WebModulesPingIndex from './views/modules/ping/index.js';
import WebModulesRosterItem from './views/modules/roster/item.js';
import WebModulesDocsIndex from './views/modules/docs/index.js';
import WebModulesHomeTodo from './views/modules/home/todo.js';
import WebModulesHomePrivacy from './views/modules/home/privacy.js';
import WebModulesStressIndex from './views/modules/stress/index.js';
import WebModulesDocsDirectives from './views/modules/docs/directives.js';
import WebModulesDemoIndex from './views/modules/demo/index.js';
import WebModulesComponentsIndex from './views/modules/components/index.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'web.layouts.base': WebLayoutsBase,
    'web.modules.home.index': WebModulesHomeIndex,
    'web.modules.docs.getting-started': WebModulesDocsGettingStarted,
    'web.modules.docs.build': WebModulesDocsBuild,
    'web.layouts.public': WebLayoutsPublic,
    'web.layouts.workspace': WebLayoutsWorkspace,
    'web.modules.home.parts.features': WebModulesHomePartsFeatures,
    'web.modules.home.parts.cta': WebModulesHomePartsCta,
    'web.modules.demo.featurecard': WebModulesDemoFeaturecard,
    'web.modules.home.parts.flowstep': WebModulesHomePartsFlowstep,
    'web.layouts.docs': WebLayoutsDocs,
    'web.modules.home.parts.faq': WebModulesHomePartsFaq,
    'web.modules.docs.architecture': WebModulesDocsArchitecture,
    'web.modules.docs.status': WebModulesDocsStatus,
    'web.modules.home.parts.compare': WebModulesHomePartsCompare,
    'web.modules.docs.lifecycle': WebModulesDocsLifecycle,
    'web.partials.head': WebPartialsHead,
    'web.modules.components.statcard': WebModulesComponentsStatcard,
    'web.modules.home.parts.hero': WebModulesHomePartsHero,
    'web.modules.home.about': WebModulesHomeAbout,
    'web.modules.home.parts.principle': WebModulesHomePartsPrinciple,
    'web.modules.docs.contexts': WebModulesDocsContexts,
    'web.modules.docs.runtime': WebModulesDocsRuntime,
    'web.modules.docs.router': WebModulesDocsRouter,
    'web.modules.home.terms': WebModulesHomeTerms,
    'web.modules.home.contact': WebModulesHomeContact,
    'web.modules.docs.sao-file': WebModulesDocsSaoFile,
    'web.modules.home.parts.usecase': WebModulesHomePartsUsecase,
    'web.modules.posts.list': WebModulesPostsList,
    'web.modules.home.parts.ovcard': WebModulesHomePartsOvcard,
    'web.modules.stress.usercard': WebModulesStressUsercard,
    'web.modules.home.parts.how': WebModulesHomePartsHow,
    'web.modules.docs.compiler': WebModulesDocsCompiler,
    'web.modules.docs.reactivity': WebModulesDocsReactivity,
    'web.modules.roster.index': WebModulesRosterIndex,
    'web.modules.home.parts.mapcard': WebModulesHomePartsMapcard,
    'web.modules.ping.index': WebModulesPingIndex,
    'web.modules.roster.item': WebModulesRosterItem,
    'web.modules.docs.index': WebModulesDocsIndex,
    'web.modules.home.todo': WebModulesHomeTodo,
    'web.modules.home.privacy': WebModulesHomePrivacy,
    'web.modules.stress.index': WebModulesStressIndex,
    'web.modules.docs.directives': WebModulesDocsDirectives,
    'web.modules.demo.index': WebModulesDemoIndex,
    'web.modules.components.index': WebModulesComponentsIndex
};

export default ViewRegistry;
