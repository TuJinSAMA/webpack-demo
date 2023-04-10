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
        test: /\.less$/,
        use: [
          (process.env.NODE_ENV === 'production' ? MiniCSSExtractPlugin.loader : 'style-loader'),
          {
            loader: 'css-loader',
            options: {
              // 在处理到使用 @import 语法时 先用 css-loader 的前 n 个 loader 处理
              // n = importLoaders
              importLoaders: 1
            }
          },
          'postcss-loader',
          'less-loader'
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