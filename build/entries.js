const HtmlWebpackPlugin = require('html-webpack-plugin');// 定义html模板插件

module.exports = {
  // 有多少页面就写多少入口
  // 主页最后会变成index.html，其余页面会变成[name].html
  entry: {
    home: './src/pages/home/index.js',// 主页
    test: './src/pages/test/index.js',// 其余的
  },
  plugin: [
    // html模板打包
    new HtmlWebpackPlugin({
      filename: '../dist/index.html',// index就是默认打开浏览器的页面，这里配置的是主页
      template: './src/templates/home.html',
      chunks: ['home'],
      // favicon: './src/assets/img/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: '../dist/test.html',
      template: './src/templates/test.html',
      chunks: ['test'],
      // favicon: './src/assets/img/favicon.ico',
    }),
  ],
};
