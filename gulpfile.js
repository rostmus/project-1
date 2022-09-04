const gulp = require('gulp'),
sass = require('gulp-sass')(require('sass')),
browserSync = require('browser-sync'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
del = require('del');

const autoprefixer = require('gulp-autoprefixer');
//очистка
gulp.task('clean', function() {
    return del.sync('dist')
})
//css сборка
gulp.task('sass', function() {
    return gulp.src('app/css/sass/**/*.scss', { sourcemap: true,})
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }
    ))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}))
})
//js сборка
gulp.task('scripts', function() {
    return gulp.src('app/js/bibliotek/**/*.js')
    // .pipe(concat('bibliotek.js'))
    .pipe(gulp.dest('dist/js/bibliotek'))
    .pipe(browserSync.reload({stream: true}))
})

//js сборка модули
gulp.task('scriptsModules', function() {
    return gulp.src('app/js/plugins/**/*.js')
    .pipe(concat('modules.js'))
    .pipe(gulp.dest('dist/js/plugins'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('external', function() {
    return gulp.src('app/js/external/**/*.js')
    .pipe(concat('external.js'))
    .pipe(gulp.dest('dist/js/external'))
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
    gulp.watch(['app/js/main.js']), gulp.parallel('scripts')
    gulp.watch('app/img/**/*'), gulp.parallel('img')
    gulp.watch('app/fonts/**/*'), gulp.parallel('fonts')
    gulp.watch('app/svg/**/*'), gulp.parallel('svg')
    gulp.watch(['app/js/plugins/**/*.js']), gulp.parallel('scriptsModules')
    gulp.watch(['app/js/external/**/*.js']), gulp.parallel('external')
    // gulp.task('default', gulp.parallel('sass','html', 'scripts', 'browser-sync','img', 'watch'))
})

gulp.task('build', gulp.parallel('clean', 'external', 'scriptsModules', 'svg', 'fonts', 'sass', 'scripts', 'html', 'img', 'browser-sync','watch'))
