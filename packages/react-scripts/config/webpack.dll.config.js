const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const CopyPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const fs = require('fs');

const dllLibs = process.env.REACT_APP_DLL_LIBS
const analyzer = process.env.npm_config_analyzer

const appDirectory = fs.realpathSync(process.cwd());
const analyzerPlugins = analyzer === 'true' && new BundleAnalyzerPlugin();

module.exports = {
  entry: {
    vendor: dllLibs ? JSON.parse(dllLibs) : ["react", "react-dom", "redux", "axios", "qs"],
  },
  mode  : 'production',
  output: {
    path     : path.resolve(appDirectory, 'dll'),
    filename : '[name].dll.[hash:5].js',
    library  : '[name]_library'
  },
  performance: {
    hints: false
  },
  plugins: [
    new WebpackBar({
        minimal: false,
        compiledIn: false
    }),
    new webpack.DllPlugin({
        name    : '[name]_library',
        path    : path.resolve(appDirectory, 'dll', 'manifest.json'),
        context : appDirectory
    }),
  ]
}
