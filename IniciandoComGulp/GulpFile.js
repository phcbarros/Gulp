// Carregamento do gulp e dos plugins
var gulp 	= require('gulp'),
	jshint 	= require('gulp-jshint'),
	uglify	= require('gulp-uglify'),
	concat	= require('gulp-concat'),
	rename	= require('gulp-rename');
	
// Definição do diretorio dos arquivos para evitar repetição
var files = './src/*.js';

// Aqui criamos uma nova tarefa através do 'gulp.task' e damos e a ela o nome 'lint'
gulp.task('lint', function(){
	// Aqui carregamos os arquivos que a gente quer rodar as tarefas com o 'gulp.src'
	// e logo depois usamos o pipe para rodar a tarefa jshint
	
	gulp.src(files)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Criamos uma nova tarefa com o nome 'dist'
gulp.task('dist', function(){
	// Carregamos os arquivos novamente
	// e rodamos uma tarefa para concatenação
	// renomeamos o arquivo que será minificado e logo depois o minificamos com o uglify
	// e para terminar usamos o 'gulp-dest' para colocar os arquivos concatenados e minificado na pasta build
	
	gulp.src(files)						//carrega os arquivos
		.pipe(concat('./dist')) 		//concatena
		.pipe(rename('dist.min.js')) 	//renomeia
		.pipe(uglify())					//minifica
		.pipe(gulp.dest('.dist'));		//realoca os arquivos concatenados
});

// Criamos uma tarefa 'default' que vai rodar quando rodamos `gulp` no projeto
gulp.task('default', function(){
	// Usamos o `gulp.run` para rodar as tarefas
	// e usamos o `gulp.wacth` para o Gulp esperar mudanças nos arquivos para rodar novamente  
	
	gulp.run('lint', 'dist');
	gulp.watch(files, function(evt){
		gulp.run('lint', 'dist')	
	});
});