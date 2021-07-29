const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const prdConfig = merge(baseConfig,{
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'../dist/')
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})

module.exports = prdConfig