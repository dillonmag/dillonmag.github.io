var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
del = require('del'),
runSequence = require('run-sequence'),
config = require('../config');

// moves dist to gh-pages

gulp.task('fontgen1', function(callback){
  del(['./app/fonts', './dist/fonts'], callback);
});

gulp.task('fontgen2', function() {
  return gulp.src("./app/fontgen/*.{ttf,otf}")
  .pipe($.fontgen({
    dest: "./app/fonts/"
  }));
});

gulp.task('fontgen', function(callback) {
  runSequence(
    ['fontgen1'],
    ['fontgen2'],
    ['font'],
    callback
    );
});
