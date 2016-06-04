var gulp = require('gulp'),
browserSync = require('browser-sync'),
$ = require('gulp-load-plugins')(),
fs = require('fs'),
customPlumber = require('../custom-modules/plumber'),
config = require('../config');

gulp.task('nunjucks', function(){
  $.nunjucksRender.nunjucks.configure([config.nunjucks.template], {watch: false});
  return gulp.src(config.nunjucks.src)
  .pipe(customPlumber(config.nunjucks.error))
  .pipe($.data(function() {
    return JSON.parse(fs.readFileSync(config.nunjucks.data))
  }))
  .pipe($.nunjucksRender())
  .pipe(gulp.dest(config.nunjucks.dest))
  .pipe(browserSync.reload({
    stream:true
  }));
});
