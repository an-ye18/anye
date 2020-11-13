import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            // 登录
            component: () =>
                import ('./views/Login.vue')
        },
        {
            path: '/index',
            // 首页
            component: () =>
                import ('./views/Index.vue')
        },
        {
            path: '/grsz',
            // 个人设置
            component: () =>
                import ('./views/Grsz.vue')
        },
        {
            path: '/xtsz',
            // 系统设置
            component: () =>
                import ('./views/Xtsz.vue')
        },
        {
            path: '/search',
            // 搜索
            component: () =>
                import ('./views/Search.vue')
        },
        {
            path: '/khggc',
            // 客户公共池
            component: () =>
                import ('./views/Khggc.vue')
        },
        {
            path: '/xs',
            // 线索
            component: () =>
                import ('./views/Xs.vue')
        },
        {
            path: '/sj',
            // 商机
            component: () =>
                import ('./views/Sj.vue')
        }
    ]
})