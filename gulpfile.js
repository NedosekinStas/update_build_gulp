import gulp from 'gulp';
import sass from 'gulp-sass';
import browser_sync from 'browser-sync';

// Html
export const html = () => {
  return gulp.src('app/*.html')
    .pipe(browser_sync.reload({ stream: true }))
}

// Styles
export const styles = () => {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browser_sync.reload({ stream: true }))
};

// Scripts
export const scripts = () => {
  return gulp.src(['app/js/index.js', 'app/libs/**/*.js'])
    .pipe(browser_sync.reload({ stream: true }))
}

export const hotreload = () => {
  browser_sync.init({
    notify: false,
    ui: false,
    server: {
	  baseDir: 'app'
	}
  });
}

export const watch = () => {
  gulp.watch('app/sass/**/*.sass', gulp.series(styles));
  gulp.watch('app/*.html', gulp.series('html'));
  gulp.watch(['app/js/index.js', 'app/libs/**/*.js'], gulp.series('scripts'));
}

export default gulp.series(
  gulp.parallel(
    styles
  ),
  gulp.parallel(
    watch,
    hotreload
  )
);