/*
*路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Miste from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 使用router插件
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        // 默认显示msite页
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/msite',
            component:Miste,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        }
    ]
})
