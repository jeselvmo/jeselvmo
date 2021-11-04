const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  entry: ['./src/index.js'],
  output: {
    filename: 'jeselvmo.js',
    libraryTarget: 'umd',
    library: 'jeselvmo',
    libraryExport: 'default', // jeselvmo.default
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    hot: true,
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 9000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
  ],
};

module.exports = webpackConfig;
