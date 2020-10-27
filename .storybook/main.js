const path = require('path');

module.exports = {
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-addon-designs/register',
  ],
  webpackFinal: async config => {
    // typescript
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');

    // fonts
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: require.resolve('file-loader'),
          query: {
            name: '[name].[ext]',
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
