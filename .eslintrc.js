module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      assert: 'either',
    }],
    'consistent-return': 'off',
  },
};
