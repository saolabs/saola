/**
 * Saola Application Entry Point
 * 
 * This file initializes the Saola view runtime and registers all views.
 * Import and use views from the auto-generated views.js registry.
 */

import { Application, app } from '@saolabs/client';
import views from './views.js';

// Get Application instance
const App = app('App');

// Register all views from the combined registry
App.View.setViewRegistry(views);

App.init();

// Export for use in other modules
export { App, views };
export default App;
