var gulp = require('gulp');
var gzip = require('gulp-gzip');
var minifyHTML = require('gulp-minify-html');
var website = require('gulp-website');
var concat = require('gulp-concat');

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

gulp.task('js',
  function()
  {
    gulp.src(['./src/static/js/jquery.min.js', './src/**/*.js'])
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./build/static'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build/static'));
  }
);

gulp.task('css',
  function()
  {
    gulp.src('./src/**/*.css')
      .pipe(concat('all.css'))
      .pipe(gulp.dest('./build/static'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build/static'));
  }
);

gulp.task('misc',
  function()
  {
    gulp.src('./src/misc/**')
      .pipe(gulp.dest('./build'))
      .pipe(gzip(gzipOptions))
      .pipe(gulp.dest('./build'));
  }
);

gulp.task('watch',
  function()
  {
    gulp.watch("./src/content/**/*.html", ["html"]);
    gulp.watch("./src/**/*.js", ["js"]);
    gulp.watch("./src/**/*.css", ["css"]);
    gulp.watch("./src/misc/**/*", ["misc"]);
  }
);

gulp.task('default', ['html', 'js', 'css', 'misc']);
