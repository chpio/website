var gulp = require('gulp');
var gzip = require('gulp-gzip');
var minifyHTML = require('gulp-minify-html');
var website = require('gulp-website-builder');
var less = require('gulp-less');
var rimraf = require('rimraf');
var streamqueue = require('streamqueue');
var marked = require('marked');
var highlight = require('highlight.js');

marked.setOptions({
  highlight: function(code, lang, callback) {
    return lang ? highlight.highlight(lang, code).value : highlight.highlightAuto(code).value;
  }
});

gulp.task('clean',
  function(callback)
  {
    rimraf("./build", callback);
  }
);

gulp.task('compress', function() {
  return gulp.src(['./build/**/*', '!**/*.gz'])
    .pipe(gzip({
      gzipOptions: { level: 9 },
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('style',
  function()
  {
    return gulp.src('./less/style.less')
      .pipe(less({
          compress: true
        }))
      .pipe(gulp.dest('./build/static'))
  }
);

gulp.task('html',
  function()
  {
    var ws = gulp.src('./content/**/*.md')
      .pipe(website({
        websiteHost: 'http://b128.net',
        contentHandler: function(content, args) {
          return marked(content);
        }
      }));

    return streamqueue(
        {objectMode: true},
        ws.html
        /*.pipe(minifyHTML({
            conditionals: true
          }))*/,
        ws.sitemap,
        ws.robots
      )
      .pipe(gulp.dest('./build'));
  }
);

gulp.task('default', ['style', 'html']);

gulp.task('watch',
  function()
  {
    gulp.watch(["./less/**/*.less"], ["style"]);
    gulp.watch(["./content/**/*.md", "./layout/**/*.html"], ["html"]);
  }
);
