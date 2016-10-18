var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
inject = require('gulp-inject'),
runSequence = require('run-sequence'),
config = require('../config');


gulp.task('fa1', function () {
gulp.src(config.main.src + config.frameworkSass.src)
  .pipe(inject(gulp.src(['./inject/fa.txt']), {
    starttag: '// inject:fa',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + config.frameworkSass.dest));
});

gulp.task('fa2', function () {
gulp.src(config.main.src + 'sass/vendors/global/forms.sass')
  .pipe(inject(gulp.src(['./inject/fa2.txt']), {
    starttag: '// inject:fa',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + 'sass/vendors/global'));
});

gulp.task('fa', function(callback) {
  runSequence(
    ['fa1'],
    ['fa2'],
    callback
    );
});

gulp.task('no-fa1', function () {
gulp.src(config.main.src + config.frameworkSass.src)
  .pipe(inject(gulp.src(['./inject/blank.txt']), {
    starttag: '// inject:fa',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + config.frameworkSass.dest));
});

gulp.task('no-fa2', function () {
gulp.src(config.main.src + 'sass/vendors/global/forms.sass')
  .pipe(inject(gulp.src(['./inject/blank.txt']), {
    starttag: '// inject:fa',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.main.src + 'sass/vendors/global'));
});


gulp.task('no-fa', function(callback) {
  runSequence(
    ['no-fa1'],
    ['no-fa2'],
    callback
    );
});
