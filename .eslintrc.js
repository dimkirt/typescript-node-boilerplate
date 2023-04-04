module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: '.eslintrc.js',

  extends: [
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
    'eslint:recommended',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
    'plugin:@typescript-eslint/recommended',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // needs to be last to make sure we turn off potential formatting rules from other extensions
    'prettier'
  ],

  // All rules can be found here: https://typescript-eslint.io/rules/ avoid use of formatting rules, use formatters instead
  rules: {
    "@typescript-eslint/no-base-to-string": "error",
  },
};
