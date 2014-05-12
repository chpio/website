var gulp = require('gulp');
var gzip = require('gulp-gzip');
var minifyHTML = require('gulp-minify-html');
var website = require('gulp-website');
var concat = require('gulp-concat');
var less = require('gulp-less');

var gzipOptions =
  {
    gzipOptions: { level: 9 },
  };
  
var minifyHTMLOptions =
  {
    conditionals: true,
  };


gulp.task('html',
  function()
  {
    gulp.src('./src/content/**/*.html')
      .pipe(website())
      .pipe(minifyHTML(minifyHTMLOptions))
      .pipe(gulp.dest('./build'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build'));
  }
);

gulp.task('script',
  function()
  {
    gulp.src(['./src/js/jquery.min.js', './src/js/**/*.js'])
      .pipe(concat('script.js'))
      .pipe(gulp.dest('./build/static'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build/static'));
  }
);

gulp.task('style',
  function()
  {
    gulp.src('./src/less/style.less')
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
    gulp.src('./src/root-static/**')
      .pipe(gulp.dest('./build'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build'));
  }
);

gulp.task('watch',
  function()
  {
    gulp.watch("./src/content/**/*.html", ["html"]);
    gulp.watch("./src/**/*.js", ["script", "html"]);
    gulp.watch("./src/**/*.css", ["style", "html"]);
    gulp.watch("./src/misc/**/*", ["root-static"]);
  }
);

gulp.task('default', ['script', 'style', 'root-static', 'html']);
