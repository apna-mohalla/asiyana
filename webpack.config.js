const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEBUG = process.argv.includes('--development');

const config = {
  devtool: DEBUG ? 'eval-source-map' : false,
  entry: path.resolve(__dirname, 'src/js/index.js'),
  mode: DEBUG ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        DEBUG ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    }],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.template.html'),
    }),
    new CleanWebpackPlugin([path.resolve(__dirname, 'build')]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: DEBUG ? '[name].css' : '[name].css',
      chunkFilename: DEBUG ? '[id].css' : '[id].css',
    }),
    new webpack.SourceMapDevToolPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'src/icon-fonts'), to: path.resolve(__dirname, 'build/icon-fonts') },
      { from: path.resolve(__dirname, 'src/favicon'), to: path.resolve(__dirname, 'build/favicon') },
      { from: path.resolve(__dirname, 'src/js/sw.js'), to: path.resolve(__dirname, 'build') },
      { from: path.resolve(__dirname, 'manifest.json'), to: path.resolve(__dirname) },
    ]),
  ],
};

module.exports = config;
