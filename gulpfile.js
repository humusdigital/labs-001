//Gulp Magic
var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');

gulp.task('default', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss({
            	applyStyleTags: true,
            	applyLinkTags: true,
            	removeStyleTags: true,
            	removeLinkTags: true
        }))
        .pipe(gulp.dest('build/'));
});
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
