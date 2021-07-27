const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const prdConfig = merge(baseConfig,{
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'../dist/')
  }
})

module.exports = prdConfig