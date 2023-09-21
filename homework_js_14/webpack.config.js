const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode:'production',
  entry: path.resolve(__dirname, 'src', 'code', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash:8].js',
    assetModuleFilename: 'images/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
        delete: ['dist'],
        },
      },
    }),
  ],
  devServer: {
    watchFiles: path.resolve(__dirname, 'src'),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', 
          'sass-loader'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
      test: /\.(gif|png|jpe?g|svg)$/i,
      type: 'asset/resource',
      },
    ],
  },
}