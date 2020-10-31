const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    // publicPath: "/dist/",
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    // allows us to do absolute imports from "src"
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.scss'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    hotOnly: true,
    publicPath: 'http://localhost:3000/dist/',
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      chunkFilename: '[id].[fullhash].css',
    }),
    new Dotenv({
      path: './.env.production',
    }),
    new WebpackBundleAnalyzer({
      analyzerMode: 'static',
      reportFilename: './report.html',
      openAnalyzer: false,
    }),
  ],
};
