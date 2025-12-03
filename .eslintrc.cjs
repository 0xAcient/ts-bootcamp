module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    project: ['./week-1/tsconfig.json'], // point to the week-1 TS config
    tsconfigRootDir: __dirname,
  },
  rules: {},
};

