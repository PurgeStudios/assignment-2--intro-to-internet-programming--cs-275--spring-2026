const { src, dest, series, watch } = require(`gulp`),
    htmlCompressor = require(`gulp-htmlmin`),
    cssLinter = require(`gulp-stylelint`),
    jsLinter = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    jsCompressor = require(`gulp-uglify`),
    cssCompressor = require(`gulp-clean-css`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;


let copyHtmlToDev = () => {
    return src(`./index.html`)
        .pipe(dest(`dev/`));
};

let copyImgToProd = () => {
    return src(`./img/*.jpg`, `./img/*.svg`)
        .pipe(dest(`prod/img`));
};

//develpment tasks
let lintCSS = () => {
    return src(`./styles/main.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }))
        .pipe(dest(`dev/styles`));
};
let lintJS = () => {
    return src(`./js/main.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

let transpileJSForDev = () => {
    return src(`./js/main.js`)
        .pipe(babel())
        .pipe(dest(`dev/js`));
};

let browserChoice = `default`;
let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [`./`]
        }
    });

    watch(`dev/js/*.js`, series(lintJS, transpileJSForDev))
        .on(`change`, reload);

    watch(`dev/styles/*css`, lintCSS)
        .on(`change`, reload);
};

//production tasks
let compressHTML = () => {
    return src(`dev/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/`));
};
let compressJS = () => {
    return src(`dev/js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
};

let compressCSS = () => {
    return src(`dev/styles/*.css`)
        .pipe(cssCompressor())
        .pipe(dest(`prod/styles`));
};

exports.serve = series(
    lintCSS,
    lintJS,
    transpileJSForDev,
    serve
);

exports.default = series(
    copyHtmlToDev,
    lintCSS,
    lintJS,
    transpileJSForDev,
    serve
);

exports.build = series(
    copyImgToProd,
    compressHTML,
    compressJS,
    compressCSS
);
