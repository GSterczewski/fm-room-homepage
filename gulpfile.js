const sass = require("gulp-sass");
const { src,dest, watch } = require("gulp");
const sync = require("browser-sync").create();
const uglify = require("gulp-uglify");


const config = {
    buildDir : "./build/**/*",
    jsSource : "./src/js/**/*.js",
    sassSource : "./src/scss/**/*.scss",
    cssOutput : "./build",
    jsOutput : "./build/js",
    serverDir : "./build"
}

const copyJS = () => src(config.jsSource).pipe(dest(config.jsOutput))
const uglifyJS = () => src(config.jsSource).pipe(uglify()).pipe(dest(config.jsOutput))

const transpileSass = () => src(config.sassSource).pipe(sass().on('error',sass.logError)).pipe(dest(config.cssOutput))
const watchJS =() => watch(config.jsSource).on("change",copyJS)
const watchSass = () => watch(config.sassSource).on("change",transpileSass)
const watchBuild =() => watch(config.buildDir).on("all", sync.reload) 


function run(){
    serve()
    watchSass()
    watchJS()
    watchBuild()
}

function serve(){
    sync.init({
        server:{
            baseDir: config.serverDir
        }
    })
}


exports.uglify = uglifyJS
exports.run = run
exports.sass = transpileSass
