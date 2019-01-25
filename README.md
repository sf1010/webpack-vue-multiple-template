# webpack-vue-multiple-template
基于webpack4构建的多页面vue模板
### 使用方法
```
git clone git@github.com:sf1010/webpack-vue-multiple-template.git
cd webpack-vue-multiple-template
npm install
npm run dev
or
npm run build
```
### 其他
- 页面入口在./entries.js中，每个页面都需要入口
- ./src/template中为每个入口的html文件
- ./src/page中为每个页面的入口和vue文件
- 静态文件放在./src/asset中