module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:react/jsx-runtime',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'linebreak-style': 'off',
        quotes: [2, 'single', { avoidEscape: true }],
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-multiple-empty-lines': [2, { max: 2 }],
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'warn',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'max-len': ['error', { code: 100, ignoreComments: true }],
        'no-console': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
