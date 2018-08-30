const path = require("path");

module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
      test: /\.css$/,
      loaders: [
        'style-loader',
        {
          loader: require.resolve('css-loader'),
          options: {
            url: false,
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'postcss-loader'
        }
      ],
      include: path.resolve(__dirname, "../")
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg|ico|woff|woff2|eot|ttf)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: path.join('files', '[hash].[ext]'),
      },
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-2'],
          },
        },
        {
          loader: 'eslint-loader',
          options: {
            emitError: true,
            failOnError: true
          },
        },
      ],
    },
  );

  // Return the altered config
  return storybookBaseConfig;
};
