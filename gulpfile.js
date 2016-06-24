'use strict';

// Base Gulp File
var gulp        = require('gulp'),
browserSync = require('browser-sync').create(),
sass        = require('gulp-sass'),
compass = require('gulp-compass'),
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-minify-css');

// Static Server + watching scss/html files
gulp.task('watch', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/css/main.css").on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch('./src/scss/**/*.scss', ['compass']);
});

gulp.task('compass', function() {
  gulp.src('./src/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './src/css',
      sass: './src/scss'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});

gulp.task('useref', function () {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['useref']);
