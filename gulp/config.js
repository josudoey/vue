var src = './example'
dest = './build';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      src + '/www/**',
      src + '/chrome-ext/**',
      dest + '/**'
    ]
  },
  markup: [{
    src: src + "/www/**",
    dest: dest
  }, {
    src: src + "/chrome-ext/**",
    dest: dest
  }],
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/main.js',
      dest: dest,
      outputName: 'main.js'
    }],
    extensions: ['.js']
  }
};

