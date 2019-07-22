const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 拆分合并css插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 清理目录插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const entries = require('./entries');

const config = {
  entry: entries.entry,
  output: {
    path: path.resolve(__dirname, '../dist'), // 出口目录
    filename: 'js/[name].[chunkhash:7].js', // 出口文件名，[name]表示通入口文件名
    chunkFilename: 'js/[name].[chunkhash:7].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'iconfont/[name].[hash:7].[ext]',
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: '/',
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)/, //是匹配图片文件后缀名称
        use: [
          {
            loader: 'url-loader', //是指定使用的loader和loader的配置参数
            options: {
              limit: 500, //是把小于500B的文件打成Base64的格式，写入JS
              name: 'img/[name].[hash:7].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
      {
        test: /\.(htm|html)$/i,
        use: [
          'html-withimg-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    ...entries.plugin,
    // css整合拆分
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:7].css',
      chunkFilename: 'css/[name].[contenthash:7].chunk.css'
    }),
    // 每次编译清理目录
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
};

module.exports = config;
