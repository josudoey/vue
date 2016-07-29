var gulp = require('gulp');
var config = require('../config').markup;

gulp.task('markup', function() {
  var markupThis = function(makeupConfig) {
    return gulp.src(makeupConfig.src)
      .pipe(gulp.dest(makeupConfig.dest));
  }
  config.forEach(markupThis);
});

