const merge = require('webpack-merge')
const base = require('./webpack')
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

let prodConfig = merge(base, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true
          }
        },
        sourceMap: true,
        cache: true,
        parallel: true
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [resolve('lib'), resolve('example')],
      verbose: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    })
  ]
})
if (process.env.npm_config_report) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  prodConfig.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = prodConfig
