/**
 * Auto-generated View Registry for web context
 * Generated at: 2026-08-29T16:01:41.202Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/web/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import WebLayoutsDocs from './views/layouts/docs.js';
import WebModulesHomeIndex from './views/modules/home/index.js';
import WebModulesDemoFeaturecard from './views/modules/demo/featurecard.js';
import WebComponentsCodeBlock from './views/components/code-block.js';
import WebLayoutsBase from './views/layouts/base.js';
import WebModulesComponentsStatcard from './views/modules/components/statcard.js';
import WebModulesDocsContexts from './views/modules/docs/contexts.js';
import WebModulesDocsRouter from './views/modules/docs/router.js';
import WebModulesHomeContact from './views/modules/home/contact.js';
import WebModulesDocsGettingStarted from './views/modules/docs/getting-started.js';
import WebModulesDocsClientServices from './views/modules/docs/client-services.js';
import WebModulesDocsValidator from './views/modules/docs/validator.js';
import WebModulesDocsLifecycle from './views/modules/docs/lifecycle.js';
import WebModulesDocsMask from './views/modules/docs/mask.js';
import WebComponentsCodeWindow from './views/components/code-window.js';
import WebLayoutsPublic from './views/layouts/public.js';
import WebModulesHomePartsMapcard from './views/modules/home/parts/mapcard.js';
import WebModulesDocsStatus from './views/modules/docs/status.js';
import WebModulesDocsArchitecture from './views/modules/docs/architecture.js';
import WebModulesHomeTerms from './views/modules/home/terms.js';
import WebLayoutsWorkspace from './views/layouts/workspace.js';
import WebModulesDocsBuild from './views/modules/docs/build.js';
import WebPartialsHead from './views/partials/head.js';
import WebModulesDocsIndex from './views/modules/docs/index.js';
import WebModulesDocsReactivity from './views/modules/docs/reactivity.js';
import WebModulesHomePartsPrinciple from './views/modules/home/parts/principle.js';
import WebModulesHomePartsFeatures from './views/modules/home/parts/features.js';
import WebModulesDocsCompiler from './views/modules/docs/compiler.js';
import WebModulesStressUsercard from './views/modules/stress/usercard.js';
import WebModulesPostsList from './views/modules/posts/list.js';
import WebModulesDocsSaoFile from './views/modules/docs/sao-file.js';
import WebModulesDocsRuntime from './views/modules/docs/runtime.js';
import WebModulesDocsRepository from './views/modules/docs/repository.js';
import WebModulesDocsResponse from './views/modules/docs/response.js';
import WebModulesHomePartsArchitecture from './views/modules/home/parts/architecture.js';
import WebModulesHomePrivacy from './views/modules/home/privacy.js';
import WebModulesHomePartsFlowstep from './views/modules/home/parts/flowstep.js';
import WebModulesHomePartsCta from './views/modules/home/parts/cta.js';
import WebModulesHomePartsCompare from './views/modules/home/parts/compare.js';
import WebModulesHomePartsFaq from './views/modules/home/parts/faq.js';
import WebModulesPingIndex from './views/modules/ping/index.js';
import WebModulesDocsSystemVars from './views/modules/docs/system-vars.js';
import WebModulesHomePartsOvcard from './views/modules/home/parts/ovcard.js';
import WebModulesHomeAbout from './views/modules/home/about.js';
import WebModulesHomePartsHero from './views/modules/home/parts/hero.js';
import WebModulesDocsServices from './views/modules/docs/services.js';
import WebModulesRosterIndex from './views/modules/roster/index.js';
import WebModulesDocsCoreKit from './views/modules/docs/core-kit.js';
import WebModulesHomeTodo from './views/modules/home/todo.js';
import WebModulesRosterItem from './views/modules/roster/item.js';
import WebModulesDemoIndex from './views/modules/demo/index.js';
import WebModulesHomePartsUsecase from './views/modules/home/parts/usecase.js';
import WebModulesHomePartsHow from './views/modules/home/parts/how.js';
import WebModulesStressIndex from './views/modules/stress/index.js';
import WebModulesDocsDirectives from './views/modules/docs/directives.js';
import WebModulesComponentsIndex from './views/modules/components/index.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'web.layouts.docs': WebLayoutsDocs,
    'web.modules.home.index': WebModulesHomeIndex,
    'web.modules.demo.featurecard': WebModulesDemoFeaturecard,
    'web.components.code-block': WebComponentsCodeBlock,
    'web.layouts.base': WebLayoutsBase,
    'web.modules.components.statcard': WebModulesComponentsStatcard,
    'web.modules.docs.contexts': WebModulesDocsContexts,
    'web.modules.docs.router': WebModulesDocsRouter,
    'web.modules.home.contact': WebModulesHomeContact,
    'web.modules.docs.getting-started': WebModulesDocsGettingStarted,
    'web.modules.docs.client-services': WebModulesDocsClientServices,
    'web.modules.docs.validator': WebModulesDocsValidator,
    'web.modules.docs.lifecycle': WebModulesDocsLifecycle,
    'web.modules.docs.mask': WebModulesDocsMask,
    'web.components.code-window': WebComponentsCodeWindow,
    'web.layouts.public': WebLayoutsPublic,
    'web.modules.home.parts.mapcard': WebModulesHomePartsMapcard,
    'web.modules.docs.status': WebModulesDocsStatus,
    'web.modules.docs.architecture': WebModulesDocsArchitecture,
    'web.modules.home.terms': WebModulesHomeTerms,
    'web.layouts.workspace': WebLayoutsWorkspace,
    'web.modules.docs.build': WebModulesDocsBuild,
    'web.partials.head': WebPartialsHead,
    'web.modules.docs.index': WebModulesDocsIndex,
    'web.modules.docs.reactivity': WebModulesDocsReactivity,
    'web.modules.home.parts.principle': WebModulesHomePartsPrinciple,
    'web.modules.home.parts.features': WebModulesHomePartsFeatures,
    'web.modules.docs.compiler': WebModulesDocsCompiler,
    'web.modules.stress.usercard': WebModulesStressUsercard,
    'web.modules.posts.list': WebModulesPostsList,
    'web.modules.docs.sao-file': WebModulesDocsSaoFile,
    'web.modules.docs.runtime': WebModulesDocsRuntime,
    'web.modules.docs.repository': WebModulesDocsRepository,
    'web.modules.docs.response': WebModulesDocsResponse,
    'web.modules.home.parts.architecture': WebModulesHomePartsArchitecture,
    'web.modules.home.privacy': WebModulesHomePrivacy,
    'web.modules.home.parts.flowstep': WebModulesHomePartsFlowstep,
    'web.modules.home.parts.cta': WebModulesHomePartsCta,
    'web.modules.home.parts.compare': WebModulesHomePartsCompare,
    'web.modules.home.parts.faq': WebModulesHomePartsFaq,
    'web.modules.ping.index': WebModulesPingIndex,
    'web.modules.docs.system-vars': WebModulesDocsSystemVars,
    'web.modules.home.parts.ovcard': WebModulesHomePartsOvcard,
    'web.modules.home.about': WebModulesHomeAbout,
    'web.modules.home.parts.hero': WebModulesHomePartsHero,
    'web.modules.docs.services': WebModulesDocsServices,
    'web.modules.roster.index': WebModulesRosterIndex,
    'web.modules.docs.core-kit': WebModulesDocsCoreKit,
    'web.modules.home.todo': WebModulesHomeTodo,
    'web.modules.roster.item': WebModulesRosterItem,
    'web.modules.demo.index': WebModulesDemoIndex,
    'web.modules.home.parts.usecase': WebModulesHomePartsUsecase,
    'web.modules.home.parts.how': WebModulesHomePartsHow,
    'web.modules.stress.index': WebModulesStressIndex,
    'web.modules.docs.directives': WebModulesDocsDirectives,
    'web.modules.components.index': WebModulesComponentsIndex
};

export default ViewRegistry;
