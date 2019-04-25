const gulp = require('gulp');
const minify = require('gulp-minify');
const minifycss = require('gulp-clean-css');

gulp.task('compress', done => {
    gulp.src(['assets/readablejs/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('assets/js'))
        done();
    }
);

gulp.task('minifycsstask', done => {
    gulp.src(['assets/readablecss/*.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('assets/css'))
        done();
    }
);