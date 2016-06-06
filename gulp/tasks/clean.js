var gulp = require('gulp'),
del = require('del'),
config = require('../config');

gulp.task('clean', function(callback){
  del(['./01/', './js/', './css/', './*.html', './app/sass/generated'], callback);
});
