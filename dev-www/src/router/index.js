const home = function(param) {
    return require.ensure([], function () {
        return param(require('../components/home'))
    }, 'home');
};
const articleDetail = function(param) {
    return require.ensure([], function () {
        return param(require('../components/articleDetail'))
    }, 'articleDetail');
};

const userLogin = function(param) {
    return require.ensure([], function () {
        return param(require('../components/user/login'))
    }, 'userLogin');
};
const userAdmin = function(param) {
    return require.ensure([], function () {
        return param(require('../components/user/admin'))
    }, 'userAdmin');
};

//路由配置 -- 路由嵌套
export default [  //顶层路由,对应app.vue
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/articleDetail',
        name: 'articleDetail',
        component: articleDetail
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
    }
]