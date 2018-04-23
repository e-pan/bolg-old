# vue + express + mongodb + linux 搭建的个人博客
* 线上地址： [付仲阔的博客](http://www.fuzhongkuo.com)

## 主要功能有

* 登录(登录状态维护);
* 文章维护;
* 标签维护;
* 基于七牛图片上传;
* 富文本编辑;
* 未完待续...
  
## 目录解析

  <pre>
    ├── service              ==> 后台接口
    │   └── bin              ==> express配置文件
    │   └── routes
    │       └── schemas.js   ==> 后台接口（数据库链接，七牛上传，富文本）
    │   └── views
    │   └── .gitignore       ==> git一些配置
    │   └── app.js
    │   └── package.json     ==> express配置
    ├── view
    │   └── build
    │   └── config
    │   └── dist              ==> 打包之后的文件夹，上传该文件夹到服务器
    │   └── src
    │       └── components    ==> 组件    
    │           └── common    ==> 公用组件 
    │           └── user      ==> 用户中心组件    
    │       └── router        ==> 路由
    │       └── App.vue       ==> 主组件
    │       └── main.js       ==> 前台入口文件
    │   └── static            ==> 静态资源
    │   └── .babelrc
    │   └── .editorconfig
    │   └── .gitignore
    │   └── .postcssrc.js
    │   └── index.html        ==> 主页面
    │   └── package-lock.json
    │   └── package.json      ==> vue配置
    ├── README.md             ==> 项目说明
  </pre>

## 本地运行

    $ git clone git@github.com:e-pan/bolg.git
    
    $ cd service 

    $ npm install

    $ npm start
    
    $ cd view
    
    $ npm install
    
    $ npm run dev
    
    
* 本地需要安装mongodb并启动服务.service内启动的是后台接口，view内启动的是页面。

