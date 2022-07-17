const gulp = require('gulp'),
sass = require('gulp-sass')(require('sass')),
browserSync = require('browser-sync'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
del = require('del')

gulp.task('clean', function() {
    return del.sync('dist')
})
//css сборка
gulp.task('sass', function() {
    return gulp.src('app/css/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}))
})
//js сборка
gulp.task('scripts', function() {
    return gulp.src('app/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}))
})
//html сборка
gulp.task('html', function() {
    return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}))
})
//картинки
gulp.task('img', function() {
    return gulp.src('app/img/**/*')
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.reload({stream: true}))
})
//svg
gulp.task('svg', function() {
    return gulp.src('app/svg/**/*')
    .pipe(gulp.dest('dist/svg'))
    .pipe(browserSync.reload({stream: true}))
})
//шрифты
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(browserSync.reload({stream: true}))
})


//работа сервера
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    })
})
//наблюдение за изменениями
gulp.task('watch', function() {
    gulp.watch('app/css/**/*.scss', gulp.parallel('sass'))
    gulp.watch('app/*.html'), gulp.parallel('html')
    gulp.watch('app/js/*.js'), gulp.parallel('scripts')
    gulp.watch('app/img/**/*'), gulp.parallel('img')
    gulp.watch('app/fonts/**/*'), gulp.parallel('fonts')
    gulp.watch('app/svg/**/*'), gulp.parallel('svg')
    // gulp.task('default', gulp.parallel('sass','html', 'scripts', 'browser-sync','img', 'watch'))
})

gulp.task('build', gulp.parallel('clean','svg', 'fonts', 'sass', 'scripts', 'html', 'img', 'browser-sync','watch'))