// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
//import mint from 'mint-ui'              // 基于 Vue.js 的移动端组件库
//import ElementUI from 'element-ui'      // 饿了么UI
import axios from 'axios'               // 异步接口

import App from './App'                 // 入口页面
import routes from './router/index'     // 路由

import vueQuillEditor from 'vue-quill-editor' // 引入富文本工具



//import 'element-ui/lib/theme-chalk/index.css' // 饿了么UI css
import '../static/css/e-pan.css'
import '../static/js/e-pan.js'



// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)
//Vue.use(mint)
//Vue.use(ElementUI)
Vue.use(vueQuillEditor)


// 将API方法绑定到全局
Vue.prototype.$http = axios
Vue.prototype.HOST = '/api'
Vue.config.productionTip = false


// 1. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    //hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
    //history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式.
    //因为router默认使用“hash”,所以设置与否浏览器的URL显示像这样(http://localhost:8000/#/firsts/first ),
    //mode设置为"history"时，浏览器URL显示为(http://localhost:8000/firsts/first),设置“history”后链接中没有#
    mode: 'history',
    strict: process.env.NODE_ENV !== 'production',
    routes
})

// 2.创建和挂载根实例
new Vue({
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')