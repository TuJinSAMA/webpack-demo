const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: false,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          (process.env.NODE_ENV === 'production' ? MiniCSSExtractPlugin.loader : 'style-loader'),
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ESLintWebpackPlugin({ extensions: ['.js', '.ts'] }),
    new MiniCSSExtractPlugin(),
    new HTMLWebpackPlugin()
  ]
}