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
    ],

    // All rules can be found here: https://typescript-eslint.io/rules/
    rules: {},
};
