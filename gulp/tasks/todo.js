var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('todo', function() {
  gulp.src(config.todo.src)
  .pipe($.todo())
  .pipe(gulp.dest(config.todo.dest));
});
