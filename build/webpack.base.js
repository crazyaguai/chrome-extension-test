const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getEntryPath = (p)=>path.resolve(__dirname,'../src/',p)

const entry = {
  background: getEntryPath('background/index.ts'),
  devtools: getEntryPath('devtools/index.tsx'),
  popup: getEntryPath('popup/index.tsx'),
}

const baseConfig = {
  entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'devtools.html',
      template: path.resolve(__dirname,'./template/index.html'),
      inject: 'body',
      chunks: ['devtools'],
    }),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: path.resolve(__dirname,'./template/index.html'),
      inject: 'body',
      chunks: ['popup'],
    })
  ]
}

module.exports = baseConfig