'use strict';

// Base Gulp File
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var compass = require('gulp-compass');

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("css/main.css").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch('./scss/**/*.scss', ['compass']);
});

gulp.task('compass', function() {
  gulp.src('./*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './css',
      sass: './scss'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});

gulp.task('default', ['serve']);
