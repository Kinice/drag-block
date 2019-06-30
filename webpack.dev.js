const merge = require('webpack-merge')
const base = require('./webpack')
const webpack = require('webpack')
const path = require('path')
const ReloadPlugin = require('html-webpack-reload-plugin')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false,
    compress: true,
    host: '0.0.0.0',
    port: 7766,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReloadPlugin()
  ]
})
