// const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const prdConfig = merge(baseConfig,{
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    index: 'popup.html',
    host: '127.0.0.1',
    port: 9000
  },
})

module.exports = prdConfig