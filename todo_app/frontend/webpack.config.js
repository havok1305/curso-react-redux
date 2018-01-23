const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js',
    },
    devServer: {
        port: 8081,
        host: '127.0.0.1',
        contentBase: './public',
    },
    resolve: {
        
    }
}