var gulp = require('gulp');
var gzip = require('gulp-gzip');
var minifyHTML = require('gulp-minify-html');
var website = require('gulp-website-builder');
var concat = require('gulp-concat');
var less = require('gulp-less');
var rev = require('gulp-rev-mtime');
var rimraf = require('rimraf');
var streamqueue = require('streamqueue');

var gzipOptions =
  {
    gzipOptions: { level: 9 },
  };

var minifyHTMLOptions =
  {
    conditionals: true,
  };

gulp.task('clean',
  function(callback)
  {
    rimraf("./build", callback);
  }
);

gulp.task('script', ['clean'],
  function()
  {
    return gulp.src(['./js/jquery.min.js', './js/**/*.js'])
      .pipe(concat('script.js'))
      .pipe(gulp.dest('./build/static'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build/static'));
  }
);

gulp.task('style', ['clean'],
  function()
  {
    return gulp.src('./less/style.less')
      .pipe(less({
          compress: true
        }))
      .pipe(gulp.dest('./build/static'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build/static'));
  }
);

gulp.task('default', ['script', 'style'],
  function()
  {
    var ws = gulp.src('./content/**/*.html')
      .pipe(website());

    return streamqueue(
        {objectMode: true},
        ws.html
          .pipe(rev({
           'cwd': './build'
          }))
          .pipe(minifyHTML(minifyHTMLOptions)),
        ws.sitemap,
        ws.robots
      )
      .pipe(gulp.dest('./build'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build'));
  }
);

gulp.task('watch',
  function()
  {
    gulp.watch(["./content/**/*.html", "./js/**/*.js", "./less/**/*.less"], ["default"]);
  }
);
