const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/components/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'ector-ui.js',
    library: 'ector-ui',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, './node_modules'),
          /\.stories\.js$/,
        ],
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                targets: {
                  chrome: '58',
                  ie: '11',
                },
              },
            ],
            '@babel/preset-react',
          ],
          plugins:
            [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-flow-strip-types',
              '@babel/plugin-proposal-class-properties',
            ],

        },
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
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[hash:base64]',
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
        include: path.resolve(__dirname, './'),
      },
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
    ],
    minimize: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};
