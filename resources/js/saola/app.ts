/**
 * Saola Application Entry Point
 * 
 * This file initializes the Saola view runtime and registers all views.
 * Import and use views from the auto-generated views.ts registry.
 */

import { app, Application } from '@saolabs/client';
import views from './views.js';

// Get Application instance
const App: Application = app() as Application;

// Bridge cho Blade shell và công cụ chẩn đoán runtime. API module vẫn là
// nguồn chính; global chỉ giữ cùng một Application instance, không khởi tạo lại.
(window as Window & { App?: Application }).App = App;

// App.start() (KHÔNG phải App.init()) — start Router để render route đầu, và
// SSR-aware: tự đọc <script data-ref="saola-ssr"> → hydrate route đầu thay vì
// mount mới (xem docs/HYDRATION.md §6). container khớp #app-root của SSR shell.
// registry PHẢI truyền qua config: App.View chỉ tồn tại sau khi providers boot
// trong init() (gọi từ start). Gọi App.View.setViewRegistry() TRƯỚC start ném
// "Cannot read properties of undefined (reading 'setViewRegistry')".
App.start({ view: { container: '#app-root', registry: views } });

// Export for use in other modules
export { App, views };
export default App;
