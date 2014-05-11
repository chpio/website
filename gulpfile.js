var gulp = require('gulp');
var gzip = require('gulp-gzip');
var minifyHTML = require('gulp-minify-html');
var website = require('gulp-website');

var gzipOptions =
  {
    gzipOptions: { level: 9 },
  };
  
var minifyHTMLOptions =
  {
    conditionals: true,
  };

gulp.task('default',
  function()
  {
    gulp.src('./src/content/**/*.html')
      .pipe(website())
      //.pipe(minifyHTML(minifyHTMLOptions))
      //.pipe(gulp.dest('./build/'))
      //.pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build/'));
  }
);
