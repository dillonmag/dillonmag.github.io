var gulp = require('gulp'),
runSequence = require('run-sequence'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('default', function(callback) {
  runSequence(
    'clean',
    // ['svgSprite', 'lint:js'],
    ['imagemin'],
    ['svgfile', 'font', 'js', 'todo', 'json'],
    ['readme', 'sass', 'nunjucks'],
    ['browserSync', 'watch'],
    callback
    );
});
