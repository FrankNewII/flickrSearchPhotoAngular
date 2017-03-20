(function () {
    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        minifycss = require('gulp-minify-css'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        sourcemaps = require('gulp-sourcemaps'),
        livereload = require('gulp-livereload'),
        htmlreplace = require('gulp-html-replace'),
        connect = require('gulp-connect');

    var config = {
        css: {
            vendors: [],
            name: 'styles',
            src: 'src/styles/**/*.sass',
            dest: 'dist/styles/styles.min.css'
        },
        js: {
            vendors: [],
            appModule: {
                taskName: 'app.module.js',
                src: 'project/app/app.module.js',
                dest: 'dist/js'
            },
            models: {
                taskName: 'models.js',
                src: 'project/app/models/**/*.js',
                dest: 'dist/js'
            },
            services: {
                taskName: 'services.js',
                src: 'project/app/services/**/*.js',
                dest: 'dist/js'
            },
            components: {
                taskName: 'components.js',
                src: 'project/app/components/**/*.js',
                dest: 'dist/js'
            },
            bootstrap: {
                taskName: 'app.bootstrap.js',
                src: 'project/app/app.bootstrap.js',
                dest: 'dist/js'
            }
        },
        html: {
            taskName: 'html',
            src: 'project/app/**/*.html',
            dest: 'dist/html'
        },
        server: {
            root: '',
            name: 'server'
        },
        indexFile: {
            js: {
                tpl: '<script src="js/%s"></script>'
            },
            css: {
                tpl: '<link href="css/%s">'
            }
        }
    };

    gulp.task(config.js.models.taskName, function () {
        return gulp.src(config.js.models.src)
            .pipe(sourcemaps.init())
            .pipe(concat(config.js.models.taskName))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.js.models.dest))
            .pipe(connect.reload());
    });

    gulp.task(config.js.services.taskName, function () {
        return gulp.src(config.js.services.src)
            .pipe(sourcemaps.init())
            .pipe(concat(config.js.services.taskName))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.js.services.dest))
            .pipe(connect.reload());
    });

    gulp.task(config.js.components.taskName, function () {
        return gulp.src(config.js.components.src)
            .pipe(sourcemaps.init())
            .pipe(concat(config.js.components.taskName))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.js.components.dest))
            .pipe(connect.reload());
    });

    gulp.task(config.js.appModule.taskName, function () {
        return gulp.src(config.js.appModule.src)
            .pipe(sourcemaps.init())
            .pipe(concat(config.js.appModule.taskName))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.js.appModule.dest))
            .pipe(connect.reload());
    });

    gulp.task(config.js.bootstrap.taskName, function () {
        return gulp.src(config.js.bootstrap.src)
            .pipe(sourcemaps.init())
            .pipe(concat(config.js.bootstrap.taskName))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.js.bootstrap.dest))
            .pipe(connect.reload());
    });

    gulp.task('html-replace', function () {
        return gulp.src('project/app/components/**/*.html')
            .pipe(gulp.dest('dist/html/'))
            .pipe(connect.reload());
    });

    gulp.task(config.server.name, function () {
        connect.server({
            root: config.server.root,
            livereload: true
        });
    });

    gulp.task('index.html', function () {
        gulp.src('project/index.html')
            .pipe(htmlreplace({
                'vendor.js': {
                    src: config.js.vendors,
                    tpl: config.indexFile.js.tpl
                },
                'js': {
                    src: [
                        config.js.appModule.taskName,
                        config.js.models.taskName,
                        config.js.services.taskName,
                        config.js.components.taskName,
                        config.js.bootstrap.taskName
                    ],
                    tpl: config.indexFile.js.tpl
                },
                'css': {
                    src: config.css.dest,
                    tpl: config.indexFile.css.tpl
                },
                'vendor.css': {
                    src: config.css.vendors,
                    tpl: config.indexFile.css.tpl
                }
            }))
            .pipe(gulp.dest('dist/'));
    });

    gulp.task('default', [
        config.js.appModule.taskName,
        config.js.components.taskName,
        'html-replace',
        config.js.models.taskName,
        config.js.services.taskName,
        config.js.bootstrap.taskName,
        'index.html',
        config.server.name
    ]);
})();