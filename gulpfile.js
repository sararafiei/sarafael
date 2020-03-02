'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpSharp = require('gulp-sharp');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('image-resize', function () {
  return gulp.src('images/**/*.+(jpeg|jpg|png|tiff|webp)', { read: false })
    .pipe(gulpSharp({
      resize: [1024],
      max: true,
      quality: 60,
      progressive: true
    }))
    .pipe(gulp.dest('img'));
});