var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('gh-pages', function() {
  return gulp.src(config.ghPages.src)
  .pipe($.ghPages());
});
