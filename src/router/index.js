import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        children: [{
            path: '',
            name: 'contents',
            component: () =>
                import ('../views/index/contents')
        }]
    },
    {
        path: '/',
        component: Home,
        children: [{
            path: '/Detail',
            name: 'Detail',
            component: () =>
                import ('../views/detail/Detail.vue')
        }]
    },
    {
        path: '/',
        component: Home,
        children: [{
            path: '/Login',
            name: 'Login',
            component: () =>
                import ('../views/login/Login')
        }]
    },

]

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
    // router.beforeEach((to, from, next) => {
    //     let name = localStorage.getItem('name')
    //     if (to.path === '/Login') {
    //         next()
    //     } else {
    //         name ? next() : next('/Login')
    //     }

// })

export default router