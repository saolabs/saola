/**
 * Webpack Entry Point
 * 
 * This file serves as the main entry point for webpack bundling.
 * It imports the actual application code from the saola/ directory.
 */

// Import the main application from the saola/ directory
import App from './saola/app.js';

// Export for use in other modules
export default App;
export { App };

// Make App available globally for inline scripts
if (typeof window !== 'undefined') {
    window.App = App;
}
