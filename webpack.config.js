const path = require('path');

// Plugins
const FsWebpackPlugin = require('fs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { STATIC_ROUTES } = require('./src/routes');

const capitalize = string => `${string[0].toUpperCase()}${string.slice(1)}`;

module.exports = env => ({
  name: 'client',
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      mtx: path.resolve(__dirname, 'src/utils/mtx')
    }
  },
  entry: Object.values(STATIC_ROUTES)
    .reduce((acc, route) => ({
      ...acc,
      [route.id]: `/src/pages/${capitalize(route.id)}/${capitalize(route.id)}.page.tsx`
    }), {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].bundle.js',
    chunkFilename: '[chunkhash].chunk.js'
  },
  optimization: {
    moduleIds: 'deterministic',
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          enforce: true
        },
        common: {
          test: /[\\/]src[\\/](?!pages)/,
          name: 'shared',
          chunks: 'initial'
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.ts|tsx$/,
      loader: 'ts-loader',
      include: [path.resolve(__dirname, 'src')]
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ],
      include: path.resolve(__dirname, 'src')
    }, {
      test: /\.png|jpg/,
      loader: 'url-loader'
    }]
  },
  plugins: [
    new FsWebpackPlugin([{
      type: 'delete',
      files: 'dist',
      hooks: ['initialize']
    }, {
      type: 'copy',
      files: {
        from: 'assets',
        to: 'dist'
      }
    }], { verbose: true }),
    new MiniCssExtractPlugin({
      filename: '[contenthash].bundle.css',
      chunkFilename: '[chunkhash].chunk.css'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.resolve(__dirname, 'report.html')
    }),
    ...Object.values(STATIC_ROUTES).map(route => new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template.html'),
      favicon: path.resolve(__dirname, 'assets/images/favicon.png'),
      filename: `${route.name}.html`,
      chunks: [route.id],
      title: route.title,
      meta: {
        description: route.description,
        'og:title': route.title,
        'og:description': route.description,
        'og:image': route.images.og
      }
    }))
  ]
});
