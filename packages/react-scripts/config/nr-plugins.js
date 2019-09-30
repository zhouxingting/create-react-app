const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path');
const fs = require('fs');

// const analyzer = process.env.npm_config_analyzer
const analyzer = process.env.analyzer
const preloadOpt = process.env.REACT_APP_PRELOAD_OPTION

const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = function(isEnvProduction) {
  if(!isEnvProduction) {
    return [
      new WebpackBar({
        minimal: false,
      }), 
    ]
  }

  return [
    // new CopyWebpackPlugin([{
    //   from: path.join(appDirectory, 'dll'),
    //   to  : path.join(appDirectory, 'build/static', 'dll')
    // }]),
    new webpack.DllReferencePlugin({
      context : appDirectory,
      manifest: path.resolve(appDirectory, 'dll', 'manifest.json')
    }),
    new AddAssetHtmlPlugin([{
      filepath: path.resolve(appDirectory,'dll/vendor.dll.*.js'),
      outputPath: 'dll',
      publicPath: 'dll',
      includeSourcemap: false,
      hash: true,
    }]),
    new WebpackBar({
      minimal: false,
    }),
    preloadOpt && new PreloadWebpackPlugin(JSON.parse(preloadOpt)),
    analyzer === 'true' && new BundleAnalyzerPlugin(),
  ]
}
