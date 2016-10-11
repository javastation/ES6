var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('proxy',function(){
    browserSync.init({
        proxy: '127.0.0.1:8080'
    });
    gulp.watch(`${baseDir}/../**/*.jsp`).on('change',browserSync.reload);
    gulp.watch(`${baseDir}/*.html`).on('change',browserSync.reload);
    gulp.watch(`${baseDir}/*.js`).on('change',browserSync.reload);
    gulp.watch(`${baseDir}/**/*.css`).on('change',browserSync.reload);
});
gulp.task('default',['proxy']);