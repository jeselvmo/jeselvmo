const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'cheap-module-source-map' : 'eval-cheap-module-source-map',
  entry: [
    './src/index.ts', // your app's entry point
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径
    filename: 'jeselvmo.js',
    libraryTarget: 'umd',
    library: 'jeselvmo',
    libraryExport: 'default', // jeselvmo.default
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};

module.exports = webpackConfig;
