const webpack = require('webpack');

module.exports = {
  entry: './ex/index.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js',
  },
  devServer: {
    port: 8081,
    host: '127.0.0.1',
    contentBase: './public'
  },
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015'],
      },
    }],
  },
};
