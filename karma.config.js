const webpackConfig = require("./webpack.config.js");
process.env.NODE_ENV = 'test';
webpackConfig.module.loaders.push({
    test: /\.jsx?$/, 
    exclude: /(test|node_modules|bower_components)/, // 排除的文件
    loader: 'istanbul-instrumenter!babel-loader'
});
// webpackConfig.module.loaders[0].loaders.unshift("istanbul-instrumenter");
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    // which karma frameworks do we want integrated
    frameworks: ['mocha', 'chai'],

    // displays tests in a nice readable format
    reporters: ['spec', 'coverage'],
    logLevel: config.LOG_DISABLE,
    // include some polyfills for babel and phantomjs
    files: [
        'node_modules/babel-polyfill/dist/polyfill.js',
        './node_modules/phantomjs-polyfill/bind-polyfill.js',   
        './test/**/*.js' // specify files to watch for tests
    ],
    preprocessors: {
      // these files we want to be precompiled with webpack
      // also run tests throug sourcemap for easier debugging
      ['./test/**/*.js']: ['webpack', 'sourcemap']
    },
    coverageReporter:{
        type:'html',
        dir:'coverage/'
    },
    // A lot of people will reuse the same webpack config that they use
    // in development for karma but remove any production plugins like UglifyJS etc.
    // I chose to just re-write the config so readers can see what it needs to have
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true,
    // tell karma all the plugins we're going to be using to prevent warnings
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  });
};