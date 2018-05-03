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
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader",
      options: {
        emitError: true,
        failOnError: true
      },
    },
  );

  // Fix Chrome security issues
  storybookBaseConfig.output.publicPath = 'http://localhost:9001/';

  // Return the altered config
  return storybookBaseConfig;
};