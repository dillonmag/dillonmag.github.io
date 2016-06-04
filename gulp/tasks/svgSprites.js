var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
config = require('../config');

gulp.task('svgSprite', function () {
  return gulp.src(config.svgSprites.src)
  .pipe($.svgSprites({
    cssFile: config.svgSprites.cssFile
  }))
  .pipe(gulp.dest(config.svgSprites.generated))
  .pipe($.filter(config.svgSprites.filter))
  .pipe($.svg2png())
  .pipe(gulp.dest(config.svgSprites.dest))
});


// // SVG symbols, trying a new method for icons...
// // Not having any luck.
// // gulp.task('symbols', function () {
// //   return gulp.src('./app/symbols/*.svg')
// //   .pipe(svgSprite({mode: "defs"}))
// //   .pipe(filter("**/*.svg"))
// //   .pipe(gulp.dest("./dist"))
// // });

// // gulp.task('symbols', function () {
// //     return gulp.src('./app/symbols/*.svg')
// //         .pipe(svgSprite({mode: "defs"}))
// //         .pipe(gulp.dest("./dist"));
// // });
