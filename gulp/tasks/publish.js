var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
runSequence = require('run-sequence'),
config = require('../config');

// moves dist to gh-pages

gulp.task('gh-pages', function() {
  return gulp.src('./dist/**/*')
  .pipe($.ghPages());
});


gulp.task('publish', function(callback) {
  runSequence(
    // ['uncss'],
    ['gh-pages'],
    callback
    );
});
