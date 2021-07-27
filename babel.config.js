const babelConfig = {
  presets: [
    '@babel/preset-typescript',
    "@babel/preset-react",
    [
      '@babel/env',
      {
          modules: false,
          targets: 'last 2 Chrome versions',
          useBuiltIns: 'usage',
          corejs: 3,
      },
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
  ]
}

module.exports = babelConfig