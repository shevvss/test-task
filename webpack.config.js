const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js',
    publicPath: '/test-task/',
  },

  mode: 'development',

  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: process.env.PORT || 8080,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      templateParameters: require('./src/dataset.json'),
      template: path.resolve(__dirname, './src/template.ejs'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
