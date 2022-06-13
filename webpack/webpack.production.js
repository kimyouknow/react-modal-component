const path = require('path');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const { merge } = require('webpack-merge');

const styledComponentsTransformer = createStyledComponentsTransformer();
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({ terserOptions: { compress: { drop_console: true } } }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: { chunks: 'all' },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
