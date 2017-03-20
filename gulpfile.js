var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

var config = {
    styles: {
        name: 'styles',
        src: 'src/styles/**/*.sass',
        dest: 'dist/styles'
    },
    js: {
        services: {
            taskName: 'services.js',
            src: 'app/services/**/*.js',
            dest: 'dist/js'
        },
        models: {
            taskName: 'models.js',
            src: 'app/models/**/*.js',
            dest: 'dist/js'
        },
        components: {
            taskName: 'components.js',
            src: 'app/components/**/*.js',
            dest: 'dist/js'
        }
    },
    html: {
        taskName: 'html',
        src: 'app/components/**/*.html',
        dest: 'dist/html'
    },
    server: {
        root: '',
        name: 'server'
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

gulp.task(config.server.name, function () {
    connect.server({
        root: config.server.root,
        livereload: true
    });
});