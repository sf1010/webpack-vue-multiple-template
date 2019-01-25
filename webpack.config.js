const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 拆分合并css插件
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清理目录插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const entries = require('./entries');

const config = {
  entry: entries.entry,
  output: {
    path: path.resolve(__dirname, './dist'), // 出口目录
    filename: 'js/[name].[chunkhash:7].js', // 出口文件名，[name]表示通入口文件名
    chunkFilename: 'js/[name].[chunkhash:7].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',
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
    new CleanWebpackPlugin(['./dist']),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      asset: path.resolve(__dirname, './src/asset'),
      component: path.resolve(__dirname, './src/component'),
      page: path.resolve(__dirname, './src/page'),
      store: path.resolve(__dirname, './src/store'),
      tool: path.resolve(__dirname, './src/tool'),
    },
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devServer = {
      contentBase: path.resolve(__dirname, './dist'),
      host: '127.0.0.1',
      compress: true,
      port: 8080,
      open: true,
    };
  } else if (argv.mode === 'production') {
    config.plugins.push(
      // 压缩css
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    );
  }

  return config;
};