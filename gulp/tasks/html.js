// *************************************
//
//   HTML Task
//
// *************************************

import config from '../config';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import htmlmin from 'gulp-htmlmin';
import handleErrors from '../util/handleErrors';

gulp.task('html', () => {
    return gulp.src(config.html.src)
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(gulpif(
            global.isProd,
            htmlmin(config.html.htmlmin)
        ))
        .pipe(gulp.dest(config.html.dest))
        .pipe(gulpif(
            global.isWatching,
            browserSync.stream({ once: true })
        ));
});
