module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'prettier',
    ],
    plugins: [
        'eslint-plugin-import',
        'eslint-plugin-react',
        'eslint-plugin-react-hooks',
        'simple-import-sort',
        'testing-library',
        'jest-dom',
    ],
    env: {
        browser: true,
        jest: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'import/imports-first': 'error',
        'import/newline-after-import': 'error',
        'import/no-unresolved': 'error',
        'import/prefer-default-export': 'off',
        'import/no-named-as-default-member': 'off',
        'import/default': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                varsIgnorePattern: '^_+$',
                argsIgnorePattern: '^_+$',
            },
        ],
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/display-name': 'off',
        'no-empty': 'error',
        curly: 'error',
        'newline-before-return': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
            {
                blankLine: 'always',
                prev: ['function'],
                next: '*',
            },
        ],
        '@typescript-eslint/unbound-method': 'off',
        'sort-imports': 'off',
        'import/order': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'max-len': ['error', { code: 100 }],
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Side effect imports.
                    ['^\\u0000'],
                    // External packages.
                    ['^react', '^@?\\w'],

                    ['^src/'],
                    [
                        // Parent imports.
                        '^\\.\\.',
                    ],
                    // Other relative imports. Put same-folder imports last.
                    ['^\\./(?=[^/]*?/)', '^\\.'],
                    // Style imports.
                    ['\\.s?css$'],
                ],
            },
        ],
        'comma-spacing': 'error',
        'object-curly-spacing': ['error', 'always'],
    },

    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: {
            version: 'detect',
        },
    },

};