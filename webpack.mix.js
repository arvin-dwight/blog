let mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ],
        exprContextCritical: false
    }
});

mix.js([
    'resources/assets/angular/polyfills.ts',
    'resources/assets/angular/vendor.ts',
    'resources/assets/angular/main.ts'
], 'public/js/app.js');
