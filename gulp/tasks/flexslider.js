var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
inject = require('gulp-inject'),
runSequence = require('run-sequence'),
config = require('../config');


gulp.task('flexslidercss', function () {
gulp.src(config.main.src + config.frameworkSass.src)
  .pipe(inject(gulp.src(['./inject/flexslidercss.txt']), {
    starttag: '// inject:flexslider',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + config.frameworkSass.dest));
});

gulp.task('flexsliderjs', function () {
gulp.src(config.frameworkJs.src)
  .pipe(inject(gulp.src(['./inject/flexsliderjs.txt']), {
    starttag: '// inject:flexslider',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.frameworkJs.dest));
});


gulp.task('flexslider', function(callback) {
  runSequence(
    ['flexslidercss'],
    ['flexsliderjs'],
    callback
    );
});



gulp.task('no-flexslidercss', function () {
gulp.src(config.main.src + config.frameworkSass.src)
  .pipe(inject(gulp.src(['./inject/blank.txt']), {
    starttag: '// inject:flexslider',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + config.frameworkSass.dest));
});

gulp.task('no-flexsliderjs', function () {
gulp.src(config.frameworkJs.src)
  .pipe(inject(gulp.src(['./inject/blank.txt']), {
    starttag: '// inject:flexslider',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.frameworkJs.dest));
});


gulp.task('no-flexslider', function(callback) {
  runSequence(
    ['no-flexslidercss'],
    ['no-flexsliderjs'],
    callback
    );
});

