import gulp from 'gulp';
import sass from 'gulp-sass';


export const style = () => {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
};

export default gulp.series(
  gulp.parallel(
    style
  )
)