var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssnext = require('postcss-cssnext')
var cssnano = require('cssnano')

gulp.task('css', () => {
  const processors = [
    cssnext({ browsers: ['last 2 versions'] }),
    cssnano({ autoprefixer: false }),
  ]

  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'))
});
