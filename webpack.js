const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'production',
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
    new CleanWebpackPlugin([resolve('lib'), resolve('example')], {
      allowExternal: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
      inject: 'body',
      hash: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true
          }
        },
        sourceMap: true,
        cache: true,
        parallel: true
      })
    ]
  }
}
