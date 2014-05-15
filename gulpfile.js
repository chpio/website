var gulp = require('gulp');
var gzip = require('gulp-gzip');
var minifyHTML = require('gulp-minify-html');
var website = require('gulp-website-builder');
var concat = require('gulp-concat');
var less = require('gulp-less');
var rev = require('gulp-rev-mtime');

var gzipOptions =
  {
    gzipOptions: { level: 9 },
  };
  
var minifyHTMLOptions =
  {
    conditionals: true,
  };


gulp.task('html', ['script', 'style'],
  function()
  {
    return gulp.src('./src/content/**/*.html')
      .pipe(website())
      .pipe(rev({
         'cwd': './build'
        }))
      .pipe(minifyHTML(minifyHTMLOptions))
      .pipe(gulp.dest('./build'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build'));
  }
);

gulp.task('script',
  function()
  {
    return gulp.src(['./src/js/jquery.min.js', './src/js/**/*.js'])
      .pipe(concat('script.js'))
      .pipe(gulp.dest('./build/static'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build/static'));
  }
);

gulp.task('style',
  function()
  {
    return gulp.src('./src/less/style.less')
      .pipe(less({
          compress: true
        }))
      .pipe(gulp.dest('./build/static'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build/static'));
  }
);

gulp.task('root-static',
  function()
  {
    return gulp.src('./src/root-static/**')
      .pipe(gulp.dest('./build'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build'));
  }
);

gulp.task('watch',
  function()
  {
    gulp.watch(["./src/content/**/*.html", "./src/**/*.js", "./src/**/*.less"], ["html"]);
    gulp.watch("./src/misc/**/*", ["root-static"]);
  }
);

gulp.task('default', ['root-static', 'html']);
