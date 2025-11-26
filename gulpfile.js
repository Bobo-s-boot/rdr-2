const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

const paths = {
  css: "src/*.css",
  js: "src/*.js",
  html: "src/*.html",
};

function minifyCSS() {
  return gulp
    .src(paths.css)
    .pipe(cleanCSS())
    .pipe(gulp.dest("docs"))
    .pipe(browserSync.stream());
}

function minifyJS() {
  return gulp
    .src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest("docs"))
    .pipe(browserSync.stream());
}

function copyHTML() {
  return gulp
    .src(paths.html)
    .pipe(gulp.dest("docs"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "docs",
    },
  });

  gulp.watch(paths.css, minifyCSS);
  gulp.watch(paths.js, minifyJS);
  gulp.watch(paths.html, copyHTML);
}

gulp.task("default", gulp.series(minifyCSS, minifyJS, copyHTML, watch));

gulp.task("build", gulp.series(minifyCSS, minifyJS, copyHTML));
