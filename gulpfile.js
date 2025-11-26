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
  return gulp.src(paths.css).pipe(cleanCSS()).pipe(gulp.dest("dist"));
}

function minifyJS() {
  return gulp.src(paths.js).pipe(uglify()).pipe(gulp.dest("dist"));
}

function copyHTML() {
  return gulp.src(paths.html).pipe(gulp.dest("dist"));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });

  gulp.watch(paths.css, minifyCSS).on("change", browserSync.reload);
  gulp.watch(paths.js, minifyJS).on("change", browserSync.reload);
  gulp.watch(paths.html, copyHTML).on("change", browserSync.reload);
}

gulp.task("default", gulp.series(minifyCSS, minifyJS, copyHTML, watch));
gulp.task("build", gulp.series(minifyCSS, minifyJS, copyHTML));
