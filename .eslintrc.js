const path = require('path')

const esLintConfig = {
  env: {
    es6: true,
  },
  extends: [
    "eslint-config-airbnb",
    "eslint-config-prettier",
  ],
  plugins: [
    "eslint-plugin-jsx-a11y",
    "eslint-plugin-react",
    "eslint-plugin-import",
  ],
  globals: {},
  rules: {
    "import/no-extraneous-dependencies": ["error", {"packageDir": path.join(__dirname)}],
    "func-names": "off",
  },
};

module.exports = esLintConfig;