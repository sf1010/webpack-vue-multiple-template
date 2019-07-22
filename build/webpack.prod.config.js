const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.base.config');

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
