//Gulp Magic
var gulp = require('gulp');
var styleInject = require("gulp-style-inject");
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');


gulp.task('default', function() {
    return gulp.src('./*.html')
    .pipe(styleInject())
    .pipe(cssmin())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'));
});

gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});
