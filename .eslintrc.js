module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },

  ignorePatterns: ['components/', 'constants/', 'svg/', 'utilities/', 'types/', 'node_modules/', 'cli/'],
  extends: ['airbnb', 'eslint-config-prettier', 'eslint-config-prettier/react'],
  plugins: ['react', 'react-hooks'],

  rules: {
    'arrow-body-style': 'off',
    'brace-style': 'off',
    'function-paren-newline': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'lines-between-class-members': 'off',
    'max-len': ['error', 120, 2],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['warn'],
    'object-curly-newline': 'off',
    'prefer-template': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-fragments': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-multi-comp': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'react/state-in-constructor': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },

  overrides: [
    {
      files: ['*.js'],
      parser: 'babel-eslint',
      rules: {
        'react/prop-types': 'error',
        'import/namespace': 'error',
        'import/no-deprecated': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended'],
      settings: {
        'import/extensions': ['.js', '.ts', '.tsx'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
      rules: {
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'no-array-constructor': 'off',
        'no-use-before-define': 'off',
      },
    },
    {
      files: ['*.{spec,test}.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],
      env: {
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
    {
      files: ['*.config.js', '.*rc.js'],
      env: {
        node: true,
      },
      rules: {
        'no-param-reassign': 'off',
        'import/no-commonjs': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
};
