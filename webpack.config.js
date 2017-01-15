var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    publicPath:'/assets/',
    filename: 'bundle.js'
  },
  devServer: {
      inline: true,
      port: 8080
   },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query: {
            "presets" : ["es2015", "react"]
        }
      }
    ]
  }
};

module.exports = config;
