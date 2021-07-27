const path = require('path')

const getEntryPath = (p)=>path.resolve(__dirname,'../src/',p)

const entry = {
  background: getEntryPath('background/index.tsx'),
  devtools: getEntryPath('devtools/index.ts'),
}

const baseConfig = {
  entry,
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
}

module.exports = baseConfig