const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  target: 'node',
  externals: nodeModules,
  entry: {
    js: './src/scheduler.js',
    //js: ['babel-polyfill', './src/scripts/index.js'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'scheduler.js',
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
    module: 'empty',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          // presets: ['es2015'],
        },
      },
    ],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   //  drop_console: true,
    //     drop_debugger: true,
    //   },
    // }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
