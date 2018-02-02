var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    del    = require('del');

gulp.task('default', ['clean'], function() {
  gulp.start('build-js', 'copy-css', 'copy-html');
});

gulp.task('clean', function() {
  return del('dist/*');
});

gulp.task('build-js', function() {
  return gulp.src('src/**/*.js')
    .pipe(concat('application.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-css', function() {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'));
});