var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
inject = require('gulp-inject'),
runSequence = require('run-sequence'),
config = require('../config');


gulp.task('bootcss', function () {
gulp.src(config.main.src + config.frameworkSass.src)
  .pipe(inject(gulp.src(['./inject/bootcss.txt']), {
    starttag: '// inject:framework',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + config.frameworkSass.dest));
});

gulp.task('bootjs', function () {
gulp.src(config.frameworkJs.src)
  .pipe(inject(gulp.src(['./inject/bootjs.txt']), {
    starttag: '// inject:framework',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.frameworkJs.dest));
});


gulp.task('bootstrap', function(callback) {
  runSequence(
    ['bootcss'],
    ['bootjs'],
    callback
    );
});

