var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
inject = require('gulp-inject'),
runSequence = require('run-sequence'),
config = require('../config');


gulp.task('loaders', function () {
gulp.src(config.main.src + config.frameworkSass.src)
  .pipe(inject(gulp.src(['./inject/loaders.txt']), {
    starttag: '// inject:loaders',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + config.frameworkSass.dest));
});

gulp.task('no-loaders', function () {
gulp.src(config.main.src + config.frameworkSass.src)
  .pipe(inject(gulp.src(['./inject/blank.txt']), {
    starttag: '// inject:loaders',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + config.frameworkSass.dest));
});

