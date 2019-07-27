(() => {

    'use strict';

    /**************** gulpfile.js configuration ****************/

    const

        // development or production
        devBuild  = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),

        // directory locations
        dir = {
            src         : 'src/',
            build       : 'dist/'
        },

        // modules
        gulp          = require('gulp'),
        sass          = require('gulp-sass'),
        rename       = require('gulp-rename'),
        cssmin  = require('gulp-minify-css');


    console.log('Gulp', devBuild ? 'development' : 'production', 'build');
    const cssConfig = {

        src         : dir.src + 'flex-grid.scss',
        watch       : dir.src + '/*',
        build       : dir.build + '',
        sassOpts: {
            sourceMap       : devBuild,
            precision       : 3,
            errLogToConsole : true
        },

    };

    function css() {

        return gulp.src(cssConfig.src)
            .pipe(sass(cssConfig.sassOpts).on('error', sass.logError))
            .pipe(gulp.dest(cssConfig.build))
            .pipe(cssmin())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('css'));

    }
    exports.css = gulp.series(css);

})();
