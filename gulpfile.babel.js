(() => {
  'use strict';
})();

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import del from "del";
import mocha from "gulp-mocha";
import browserSync from 'browser-sync';
import sass from 'gulp-sass';

const reload = browserSync.reload;

gulp.task('default', ['clean'], () => {
  gulp.start('build-js', 'sass', 'copy-html', 'copy-img', 'copy-fonts');
});

gulp.task('clean', () => {
  return del('dist/*');
});

gulp.task('build-js', () => {
  return browserify("src/app.js")//将当前项目的依赖打包到一个文件中，即app.js
    .transform("babelify")//使用babel进行代码转换
    .bundle()//打包
    .pipe(source('application.js'))//browserify生成的代码无法让gulp直接使用，所以用source转换为gulp可是别的代码，所转成的文件叫application.js
    .pipe(gulp.dest('dist/'));//pipe源自nodejs：一个程序的输出直接成为下一个程序的输入, gulp.dest指定输出目录路径
});

gulp.task('copy-css', () => {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-img', () => {
  return gulp.src('src/**/*.{png,gif,jpg}')
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-fonts', () => {
  return gulp.src('src/assets/**/*')
  .pipe(gulp.dest('dist/assets'));
});

gulp.task('test', () => {
  return gulp.src('test/**/*_test.js', {read: false})
  .pipe(mocha({repeater: 'dot'}));
});

gulp.task('build', ['default']);

gulp.task('watch', ['build'], () => {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'ES6',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['dist'],
    port: 3000
  });

  gulp.watch(['src/**/*.html'], ['copy-html', reload]);
  gulp.watch(['src/**/*.{png,gif,jpg}'], ['copy-img', reload]);
  gulp.watch(['src/**/*.scss'], ['sass', reload]);
  gulp.watch(['src/app.js'], ['build-js', reload]);
});







