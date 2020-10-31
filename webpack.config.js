const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
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
        use: [
          { loader: 'babel-loader', options: { presets: ['@babel/env'] } },
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    // allows us to do absolute imports from "src"
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.scss'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new Dotenv({
      path: './.env.development',
    }),
  ],
};
