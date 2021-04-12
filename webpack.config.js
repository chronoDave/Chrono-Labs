const path = require('path');

// Plugins
const FsWebpackPlugin = require('fs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Shared
const optimization = {
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        output: {
          comments: /@license/i
        },
        compress: {
          passes: 2
        }
      },
      extractComments: {
        filename: ({ filename }) => `${filename.split('.').slice(0, -1).join('.')}.license.txt`
      }
    })
  ],
  splitChunks: {
    cacheGroups: {
      vendors: {
        name: 'vendors',
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all'
      }
    }
  }
};

module.exports = [{
  name: 'server',
  target: 'node',
  resolve: {
    extensions: ['.js', '.ts']
  },
  entry: path.resolve(__dirname, 'src/server'),
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: '[name].bundle.js'
  },
  optimization,
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      include: path.resolve(__dirname, 'src/server')
    }]
  },
  plugins: [
    new FsWebpackPlugin([{
      type: 'delete',
      files: 'dist/server'
    }], { verbose: true })
  ]
}, {
  name: 'client',
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      mtx: path.resolve(__dirname, 'src/client/utils/mtx')
    }
  },
  entry: path.resolve(__dirname, 'src/client'),
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: '[name].bundle.js'
  },
  optimization,
  module: {
    rules: [{
      test: /\.ts|tsx$/,
      loader: 'ts-loader',
      include: path.resolve(__dirname, 'src/client')
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ],
      include: path.resolve(__dirname, 'src/client')
    }, {
      test: /\.png|jpg|gif/,
      loader: 'url-loader'
    }]
  },
  plugins: [
    new FsWebpackPlugin([{
      type: 'delete',
      files: 'dist/client'
    }], { verbose: true }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/client/index.html'),
      filename: 'index.html'
    })
  ]
}];
