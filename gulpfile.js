var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');
var coffeeSources = ['components/coffee/*.coffee']; //if more than 1
gulp.task('coffee', function(){
	gulp.src(coffeeSources)
	.pipe(coffee({bare: true}) //pipe the source to 
		.on('error', gutil.log))  //log if errors
	.pipe(gulp.dest('components/scripts'))  // after previous action pipe compiled coffee script file in this folder
	
});