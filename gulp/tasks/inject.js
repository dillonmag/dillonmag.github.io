var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
inject = require('gulp-inject'),
config = require('../config');



gulp.task('index', function () {
gulp.src('./inject/index.html')
  .pipe(inject(gulp.src(['./inject/*.txt']), {
    starttag: '<!-- inject:{{ext}} -->',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest('./inject'));
});



