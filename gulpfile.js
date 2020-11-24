const sass = require("gulp-sass");
const { src,dest, watch } = require("gulp");
const sync = require("browser-sync").create();
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

exports.run = run
exports.sass = transpileSCSS
//exports.default = defaultTask