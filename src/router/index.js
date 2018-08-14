import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import silder from '@/components/slider'
import login from '@/components/login/login'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            // name: 'index',
            component: login
        },
        {
          path: "*",
          component:login
        },
        {
            path: '/slider',
            name: 'silder',
            component: silder
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/enter/index',
            component: index
        }
    ]
})
