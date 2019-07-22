# webpack-vue-multiple-template
基于webpack4构建的多页面vue模板

## 使用方法
~~~
git clone git@github.com:sf1010/webpack-vue-multiple-template.git
cd webpack-vue-multiple-template
npm install
npm run dev
or
npm run build
~~~

## 使用框架
- [vue](https://cn.vuejs.org)
- [axios](https://github.com/axios/axios)
- [normalize](http://necolas.github.io/normalize.css/)

## 项目结构
~~~
├─build                       webpack编译配置文件目录
│  ├─entries.js               webpack的多入口配置文件，是多页面配置的核心
│  ├─webpack.base.config.js   webpack基础配置文件
│  ├─webpack.dev.config.js    webpack开发配置文件
│  └─webpack.prod.config.js   webpack生产配置文件
├─dist                        build完成生成的目录
├─src                         前端代码目录
│  ├─assets                   静态资源目录
│  │  └─styles                公用样式目录
│  ├─components               公用组件目录
│  ├─pages                    vue页面目录
│  │  ├─home                  页面目录（示例）
│  │  │  ├─components         页面私有组件目录（推荐组件内再建文件夹，继续使用index命名vue文件）
│  │  │  ├─index.js           页面入口（推荐index命名js文件）
│  │  │  └─index.vue          页面组件（推荐index命名vue文件）
│  │  └─login                 页面目录（示例）
│  │     ├─components         页面私有组件目录（推荐组件内再建文件夹，继续使用index命名vue文件）
│  │     ├─index.js           页面入口（推荐index命名js文件）
│  │     └─index.vue          页面组件（推荐index命名vue文件）
│  ├─services                 请求api方法目录
│  ├─templates                每个入口对应的html模板（可以通用一个，也可以单独分开）
│  │  ├─home.html             home的模板
│  │  └─test.html             test的模板
│  ├─tools                    公用方法，请求拦截器目录
│  │  ├─utils.js              公用方法目录
│  │  └─request.js            请求拦截器
~~~

## 其他
- 完成基本的按需加载等常用开发功能
- 没有添加任何UI框架，可依据自己的喜欢使用UI框架
- 请求框架可替换成自己喜欢的
