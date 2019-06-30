const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    'drag-block': resolve('src/drag-block.js'),
    example: resolve('src/index.js')
  },
  output: {
    path: resolve('example'),
    filename: '[name].js',
    library: 'DragBlock',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: ['/node_modules/'],
      include: resolve('src'),
      loader: ['eslint-loader']
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      include: resolve('src'),
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    },
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
      inject: 'body',
      hash: true
    })
  ]
}
