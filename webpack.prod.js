const merge = require('webpack-merge')
const base = require('./webpack')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

let prodConfig = merge(base, {
  mode: 'production',
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
  },
  plugins: [
    new CleanWebpackPlugin([resolve('lib'), resolve('example')], {
      allowExternal: true
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
