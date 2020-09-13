const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FsWebpackPlugin = require('fs-webpack-plugin');

module.exports = env => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    })
  ];

  if (!env || !env.analyze) {
    plugins.push(
      new FsWebpackPlugin([{
        type: 'delete',
        files: '../portfolio-express/client/**/*',
        hooks: ['beforeRun'],
        root: __dirname
      }])
    );
  }

  return ({
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
      path: path.resolve(__dirname, '../portfolio-express/client'),
      filename: '[name].bundle.js'
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      proxy: {
        '/assets': 'http://localhost:7777'
      }
    },
    optimization: {
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
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }, {
        test: /\.md$/,
        include: path.resolve(__dirname, 'assets'),
        use: 'raw-loader'
      }]
    },
    plugins,
    resolve: {
      extensions: ['.js', '.jsx']
    }
  });
};
