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
};

module.exports = esLintConfig;