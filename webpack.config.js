const path = require('path');

// Plugins
const FsWebpackPlugin = require('fs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = env => [{
  name: 'server',
  target: 'node',
  resolve: {
    extensions: ['.js', '.ts']
  },
  entry: path.resolve(__dirname, 'src/server.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      include: path.resolve(__dirname, 'src/server.ts')
    }]
  },
  plugins: [
    new FsWebpackPlugin([{
      type: 'delete',
      files: 'dist/index.js'
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
    filename: '[name].bundle.js',
    chunkFilename: '[contenthash].chunk.js'
  },
  optimization: {
    moduleIds: 'deterministic',
    minimizer: [
      new CssMinimizerPlugin()
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
  },
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
      files: 'dist/client',
      hooks: ['beforeRun', 'watchRun']
    }], { verbose: true }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[chunkhash].chunk.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/client/index.html'),
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.resolve(__dirname, 'report.html')
    })
  ]
}];
