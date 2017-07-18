var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/public'); //Converts the ES6 files to ES5 in this
var APP_DIR = path.resolve(__dirname, 'src/client/TODO'); //source file

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }] // if you need to import any other files in index.js file we need to add the objects in modules like CSS etc
    }]
  }
};

module.exports = config;
