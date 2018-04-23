// 首页
const home = function(param) {
    return require.ensure([], function () {
        return param(require('../components/home'))
    }, 'home');
};
// 前台文章列表
const article = param => require.ensure([], () => param(require('../components/article')), 'article')
// 前台文章列表详情
const articleDetail = function(param) {
    return require.ensure([], function () {
        return param(require('../components/articleDetail'))
    }, 'articleDetail');
};
// 前台关于我
const about = param => require.ensure([], () => param(require('../components/about')), 'about')

// 前台艺术范
const artist = r => require.ensure([], () => r(require('../components/artist')), 'artist')

// 后台登陆
const userLogin = function(param) {
    return require.ensure([], function () {
        return param(require('../components/user/login'))
    }, 'userLogin');
};
// 后台首页
const userAdmin = function(param) {
    return require.ensure([], function () {
        return param(require('../components/user/admin'))
    }, 'userAdmin');
};
// 后台文章列表
const adminArticle = function(param) {
    return require.ensure([], function () {
        return param(require('../components/user/article'))
    }, 'adminArticle');
};
// 后台标签列表
const adminTag = function(param) {
    return require.ensure([], function () {
        return param(require('../components/user/tag'))
    }, 'adminTag');
};

//路由配置 -- 路由嵌套
export default [  //顶层路由,对应app.vue
    {
        path: '/',
        name: 'home',
        component: home,
        meta: {
            title: '首页',
            content: 'disable'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/article',
        name: 'article',
        component: article,
    },
    {
        path: '/articleDetail',
        name: 'articleDetail',
        component: articleDetail
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/artist',
        name: 'artist',
        component: artist
    },
    {
        path: '/login',
        name: 'userLogin',
        component: userLogin
    },
    {
        path: '/admin',
        name: 'userAdmin',
        component: userAdmin
    },
    {
        path: '/admin/article',
        name: 'adminArticle',
        component: adminArticle
    },
    {
        path: '/admin/tag',
        name: 'adminTag',
        component: adminTag
    },
    {
        // 错误路由进入首页
        path: '*',
        redirect: '/'
    }
]