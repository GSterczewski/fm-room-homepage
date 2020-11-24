const sass = require("gulp-sass");
const { src,dest, watch } = require("gulp");
const sync = require("browser-sync").create();
const uglify = require("gulp-uglify");


const sassDir = "./src/scss/*.scss"
const cssOutputDir = "./build"
const buildDir = "./build"



function watchSass(){
    watch(sassDir)
    .on("change", transpileSCSS)
}

function watchBuild(){
    const watcher = watch('./build/**/*')
    watcher.on("change", sync.reload)
    watcher.on("add", sync.reload)
    watcher.on("unlink", sync.reload)
}

function uglifyJS(){
    const source = './src/**/*.js'
    const output = './build'
    return src(source)
    .pipe(uglify())
    .pipe(dest(output))
}



function run(){
    serve()
    watchSass()
    watchBuild()
}

function serve(){
    sync.init({
        server:{
            baseDir: buildDir
        }
    })
}

function transpileSCSS(){
 return src(sassDir)
 .pipe(sass().on("error", sass.logError))
 .pipe(dest(cssOutputDir)
 
 )
}
exports.uglify = uglifyJS
exports.run = run
exports.sass = transpileSCSS
