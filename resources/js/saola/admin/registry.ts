/**
 * Auto-generated View Registry for admin context
 * Generated at: 2026-03-08T16:56:46.887Z
 * 
 * This file imports all compiled views and exports them as a registry object.
 * Usage in app.ts:
 * 
 * import registry from './one/admin/registry.js';
 * App.View.registerViews(registry);
 */

import type { View } from '@saolabs/client';

import { AdminPortialHead } from './views/portial/head.js';
import { AdminTemplatesDemo3 } from './views/templates/demo3.js';
import { AdminTemplatesDemo2 } from './views/templates/demo2.js';
import { AdminTemplatesCounter } from './views/templates/counter.js';
import { AdminTemplatesTpl } from './views/templates/tpl.js';
import { AdminTemplatesTestScriptSetup } from './views/templates/test-script-setup.js';
import { AdminTemplatesTestDirectives } from './views/templates/test-directives.js';
import { AdminTemplatesTestAll } from './views/templates/test-all.js';
import { AdminTemplatesTestUseState } from './views/templates/test-useState.js';
import { AdminPagesFetch } from './views/pages/fetch.js';
import { AdminPagesDashboard } from './views/pages/dashboard.js';
import { AdminTemplatesTodoList } from './views/templates/todo-list.js';
import { AdminPagesUsers } from './views/pages/users.js';

export const ViewRegistry: Record<string, (data?: any, systemData?: any) => View> = {
    'admin.portial.head': AdminPortialHead,
    'admin.templates.demo3': AdminTemplatesDemo3,
    'admin.templates.demo2': AdminTemplatesDemo2,
    'admin.templates.counter': AdminTemplatesCounter,
    'admin.templates.tpl': AdminTemplatesTpl,
    'admin.templates.test-script-setup': AdminTemplatesTestScriptSetup,
    'admin.templates.test-directives': AdminTemplatesTestDirectives,
    'admin.templates.test-all': AdminTemplatesTestAll,
    'admin.templates.test-useState': AdminTemplatesTestUseState,
    'admin.pages.fetch': AdminPagesFetch,
    'admin.pages.dashboard': AdminPagesDashboard,
    'admin.templates.todo-list': AdminTemplatesTodoList,
    'admin.pages.users': AdminPagesUsers
};

export default ViewRegistry;
