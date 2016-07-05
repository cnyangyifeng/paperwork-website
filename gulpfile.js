/*******************************
 Set-up
 *******************************/

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./gulp.config')();
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});

var uiWatch = require('./semantic/tasks/watch');
var uiBuild = require('./semantic/tasks/build');

/*******************************
 Tasks
 *******************************/

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

/*--------------
 Clean
 ---------------*/

gulp.task('clean', function (done) {
    del(config.allToClean, done);
});

/*--------------
 Semantic UI
 ---------------*/

gulp.task('semantic watch', uiWatch);
gulp.task('semantic build', uiBuild);

/*--------------
 Serve
 ---------------*/

gulp.task('serve', function () {
    startBrowserSync();
});

function startBrowserSync() {
    if (browserSync.active) {
        return;
    }

    var options = {
        port: 3000,
        ghostMode: {
            clicks: false,
            location: false,
            forms: false,
            scroll: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 0, //1000,
        online: false
    };

    options.server = {
        baseDir: [
            config.src]
    };
    options.files = [
        config.src + "**/*"
    ];

    browserSync(options);
}
