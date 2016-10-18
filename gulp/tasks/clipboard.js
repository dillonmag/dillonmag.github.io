var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
inject = require('gulp-inject'),
runSequence = require('run-sequence'),
config = require('../config');

gulp.task('clipboard1', function () {
gulp.src(config.frameworkJs.src)
  .pipe(inject(gulp.src(['./inject/clipboard1.txt']), {
    starttag: '// inject:clipboard',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.frameworkJs.dest));
});

gulp.task('clipboard2', function () {
gulp.src(config.main.src + 'js/scripts.js')
  .pipe(inject(gulp.src(['./inject/clipboard2.txt']), {
    starttag: '// inject:clipboard',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + 'js'));
});


gulp.task('clipboard', function(callback) {
  runSequence(
    ['clipboard1'],
    ['clipboard2'],
    callback
    );
});


gulp.task('no-clipboard1', function () {
gulp.src(config.frameworkJs.src)
  .pipe(inject(gulp.src(['./inject/blank.txt']), {
    starttag: '// inject:clipboard',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.frameworkJs.dest));
});

gulp.task('no-clipboard2', function () {
gulp.src(config.main.src + 'js/scripts.js')
  .pipe(inject(gulp.src(['./inject/blank.txt']), {
    starttag: '// inject:clipboard',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + 'js'));
});


gulp.task('no-clipboard', function(callback) {
  runSequence(
    ['no-clipboard1'],
    ['no-clipboard2'],
    callback
    );
});

