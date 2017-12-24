const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pug = require	('gulp-pug');
const sass = require('gulp-sass');
//const minify = require('gulp-minify');
//const concat = require('gulp-concat');
/*
---FUNCIONES DE PRIMER NIVEL---
	gulp.task - define tareas
	gulp.src - Apunta a los archivos usados
	gulp.dest - Apunta a las carpetas de salida
	gulp.watch - Observa cambios en archivos y carpetas
*/


// Mensajes Logs
gulp.task('message', () => {
	return console.log('Gulp is running...');
});

//Pug
gulp.task('views', () => {
	gulp.src('src/*.pug')
		.pipe(pug({
			pretty: false
		}))
		.pipe(gulp.dest('dist/'))
});
//Minify Js
/*
gulp.task('minify', () => {
	gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});
*/

//Scripts

/*gulp.task('scripts', ()=>{
	gulp.src('src/js/*.js')
		.pipe(concat(main.js))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});*/

//Imagemin
gulp.task('imageMin', () =>{
	gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
});
//Sass
gulp.task('sass', ()=>{
	gulp.src('src/sass/*')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'))
});
gulp.task('watch', ()=> {
	/*gulp.watch('src/js/*.js', ['scripts']);*/
	gulp.watch('src/img/*', ['imageMin']);
	gulp.watch('src/sass/*.sass', ['sass']);
	gulp.watch('src/*.pug', ['views']);
});
gulp.task('default', ['message', 'views', 'sass', 'imageMin', 'watch']);