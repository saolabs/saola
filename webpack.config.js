import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import TerserPlugin from 'terser-webpack-plugin';
// Import plugin from library's separate entry point (Node.js compatible)
import { ViewRegistryPlugin } from 'onelaraveljs/plugins';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load build.config.json
const buildConfig = JSON.parse(readFileSync(path.resolve(__dirname, 'build.config.json'), 'utf-8'));

// Get context from environment variable or use default
const buildContext = process.env.BUILD_CONTEXT || 'web'; // Default to web for single-context builds

let entry, outputFilename, outputPath, publicPath;

if (buildConfig.contexts[buildContext]) {
    // Build specific context - single entry
    entry = './resources/js/app.js';
    outputFilename = 'main.bundle.js';
    outputPath = path.resolve(__dirname, `public/static/${buildContext}/js`);
    publicPath = `/static/${buildContext}/js/`;
} else {
    // Fallback to default
    entry = './resources/js/app.js';
    outputFilename = 'app.js';
    outputPath = path.resolve(__dirname, 'public/static/build');
    publicPath = '/static/build/';
}

// Determine views directory and registry output from build config
// Use context-based path structure: resources/js/one/{context}/views/
const viewsDir = path.resolve(__dirname, `resources/js/one/${buildContext}/views`);

const registryFile = path.resolve(__dirname, `resources/js/one/${buildContext}/viewRegistry.generated.js`);

export default {
    mode: 'production',
    devtool: 'source-map',
    entry: entry,
    output: {
        path: outputPath,
        filename: outputFilename, // Context-specific filename
        assetModuleFilename: 'assets/[name].[hash:8][ext]',
        clean: false, // Don't clean the directory to preserve other files
        // library: {
        //     name: 'App',
        //     type: 'umd', // Universal Module Definition
        //     export: 'default'
        // },
        globalObject: 'typeof self !== \'undefined\' ? self : this', // Universal compatibility
        sourceMapFilename: '[name].bundle.js.map',
        publicPath: publicPath,
        pathinfo: false // Reduce bundle size by removing path info
    },
    module: {
        rules: [
            // No babel - keep original ES6 syntax
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@app': path.resolve(__dirname, 'resources/js/app'),
        },
        // Improve tree shaking
        mainFields: ['module', 'main'],
        symlinks: false,
    },
    optimization: {
        minimize: true, // Enable minification for production
        minimizer: [
            // Use TerserPlugin for better minification
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: false, // Keep console.log for debugging
                        drop_debugger: true,
                        // pure_funcs: ['console.log'], // Keep console.log for debugging
                        passes: 2, // Multiple passes for better compression
                        dead_code: true,
                        unused: true,
                    },
                    mangle: {
                        toplevel: true, // Mangle top-level names
                        keep_fnames: false
                    },
                    format: {
                        comments: false // Remove comments
                    },
                    sourceMap: true // Preserve source maps in terser options
                },
                extractComments: false, // Don't extract comments to separate file
                parallel: true // Enable parallel processing
            })
        ],
        // Enable optimizations
        concatenateModules: true, // Concatenate modules for better compression
        usedExports: true, // Enable tree shaking
        sideEffects: false,
        moduleIds: 'deterministic', // Better long-term caching
        // No code splitting - build single bundle
        runtimeChunk: false,
        splitChunks: false
        // Temporarily disabled to fix chunk loading issues with defer scripts
        // splitChunks: {
        //     chunks: 'all',
        //     maxSize: 200000, // Split chunks larger than 200KB
        //     cacheGroups: {
        //         // Separate vendor libraries
        //         vendor: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendors',
        //             chunks: 'all',
        //             priority: 10,
        //             maxSize: 150000 // Split vendors larger than 150KB
        //         },
        //         // Separate core modules
        //         core: {
        //             test: /[\\/]resources[\\/]js[\\/]app[\\/]core[\\/]/,
        //             name: 'core',
        //             chunks: 'all',
        //             priority: 8,
        //             maxSize: 100000 // Split core larger than 100KB
        //         },
        //         // Separate views
        //         views: {
        //             test: /[\\/]resources[\\/]js[\\/]app[\\/]views[\\/]/,
        //             name: 'views',
        //             chunks: 'all',
        //             priority: 6,
        //             minChunks: 1,
        //             maxSize: 150000 // Split views larger than 150KB
        //         },
        //         // Separate helpers/utils
        //         utils: {
        //             test: /[\\/]resources[\\/]js[\\/]app[\\/](helpers|services)[\\/]/,
        //             name: 'utils',
        //             chunks: 'all',
        //             priority: 5,
        //             maxSize: 50000
        //         }
        //     }
        // }
    },
    externals: {
        // Don't bundle these, assume they're available globally
        'window': 'window',
        'document': 'document'
    },
    plugins: [
        new ViewRegistryPlugin({
            viewsDir: viewsDir,
            outputFile: registryFile,
            preloadViews: [
                // Add commonly used views for preloading
                // 'web.pages.home',
            ]
        })
    ],
    // Performance configuration
    performance: {
        maxEntrypointSize: 5000000, // 5MB - single bundle without splitting
        maxAssetSize: 5000000, // 5MB
        hints: false, // Disable warnings
        assetFilter: function(assetFilename) {
            // Only check JS files, ignore source maps
            return !assetFilename.endsWith('.map');
        }
    },
    // Cấu hình để mỗi module có scope riêng
    experiments: {
        topLevelAwait: true
    }
};
