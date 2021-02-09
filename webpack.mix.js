const mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js')
   .sass('src/sass/app.scss', 'public/css');

mix.browserSync({
    host: 'localhost',
    port: 3000,
    localOnly: true,
    browser: ["google chrome", "firefox"],
    server: { baseDir: ['public'] },
    files: [
        'public/css/*.css',
        'public/js/*.js',
        'public/*.html'
    ]
})