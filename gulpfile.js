var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
/**
 * Minify sources to dist directory
 */
gulp.task('compile', function(){
	gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist'));
});
/**
 * Copy sources to dist directory
 */
gulp.task('copySource', function(){
	gulp.src('src/*.js')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['compile', 'copySource']);