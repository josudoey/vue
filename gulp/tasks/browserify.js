/* browserify task
   ---------------
   Bundle javascripty things with browserify!
   This task is set up to generate multiple separate bundles, from
   different sources, and to use Watchify when run from the default task.
   See browserify.bundleConfigs in gulp/config.js
*/

var map = require('map-stream');
var browserify = require('browserify');
var vueify = require('vueify')
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp = require('gulp');
var path = require('path');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var stringify = require('stringify');
var config = require('../config').browserify;

gulp.task('browserify', function (callback) {
  var bundleQueue = 0;
  var browserifyThis = function (file) {
    bundleQueue++;
    var filepath = file.path;
    var bundleConfig = {
      entries: filepath,
      outputName: path.basename(filepath),
      dest: config.dest
    }

    var bundler = browserify({
        // Required watchify args
        cache: {},
        packageCache: {},
        fullPaths: false,
        // Specify the entry point of your app
        entries: bundleConfig.entries,
        // Add file extentions to make optional in your requires
        extensions: config.extensions,
        // Enable source maps!
        debug: config.debug,
        basedir: config.basedir
      }).transform(stringify, {
        appliesTo: {
          includeExtensions: ['.html']
        }
      })
      .transform(vueify);

    var bundle = function () {
      // Log when bundling starts
      bundleLogger.start(bundleConfig.outputName);

      return bundler
        .bundle()
        // Report compile errors
        .on('error', handleErrors)
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specifiy the
        // desired output filename here.
        .pipe(source(bundleConfig.outputName))
        // Specify the output destination
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    if (global.isWatching) {
      // Wrap with watchify and rebundle on changes
      bundler = watchify(bundler);
      // Rebundle on update
      bundler.on('update', bundle);
    }

    var reportFinished = function () {
      // Log when bundling completes
      bundleLogger.end(bundleConfig.outputName);

      if (bundleQueue) {
        bundleQueue--;
        if (bundleQueue === 0) {
          // If queue is empty, tell gulp the task is complete.
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          callback();
        }
      }
    };
    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  gulp.src(config.src, [{
      buffer: false
    }])
    .pipe(map(browserifyThis));
});

