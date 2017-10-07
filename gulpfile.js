/* eslint-disable */

const gulp = require('gulp')
const pug = require('gulp-pug')
const stylus = require('gulp-stylus')
const connect = require('gulp-connect')
const imagemin = require('gulp-imagemin')
const data = require('gulp-data')
const babel = require('gulp-babel')
const lint = require('gulp-eslint')
const stylint = require('gulp-stylint');

gulp.task('pug', () =>
  gulp.src('./src/*.pug')
      .pipe(data(() => require('./projects.json')))
      .pipe(pug())
      .pipe(gulp.dest('./out'))
      .pipe(connect.reload()))

gulp.task('stylus', () =>
  gulp.src('./src/assets/styles/*.styl')
      .pipe(stylus({compress: true}))
      .pipe(gulp.dest('./out/assets/styles/'))
      .pipe(connect.reload()))

gulp.task('stylint', () =>
gulp.src(['./src/assets/styles/*.styl', './src/assets/styles/modules/*.styl'])
    .pipe(stylint({config: '.stylintrc'}))
    .pipe(stylint.reporter()))

gulp.task('lint', () =>
  gulp.src(['./src/assets/scripts/script.js'])
      .pipe(lint())
      .pipe(lint.format()))

gulp.task('babel', () =>
  gulp.src('./src/assets/scripts/script.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest('./out/assets/scripts'))
      .pipe(connect.reload()))

gulp.task('senna', () =>
gulp.src('./node_modules/senna/build/globals/senna-min.js')
    .pipe(gulp.dest('./out/assets/scripts')))

gulp.task('imagemin', () =>
  gulp.src('src/assets/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('out/assets/img')))

gulp.task('watch', () => {
  gulp.watch(['./src/*.pug', './src/layouts/*.pug', './src/partials/*.pug'], ['pug'])
  gulp.watch(['./src/assets/styles/*.styl', './src/assets/styles/modules/*.styl'], ['stylint', 'stylus'])
  gulp.watch(['./src/assets/scripts/*.js'], ['lint', 'babel'])
})

gulp.task('serve', () =>
  connect.server({
    root: './out',
    livereload: true
  }))

gulp.task('build', ['pug', 'stylint', 'stylus', 'imagemin', 'lint', 'babel', 'senna'])
gulp.task('server', ['serve', 'watch'])
