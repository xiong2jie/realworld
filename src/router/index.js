import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout'),
      children: [
        {
          name: 'home',
          path: '', // 父路由的默认子路由
          component: () => import('@/views/home')
        },
        {
          name: 'login',
          path: 'login',
          component: () => import('@/views/login')
        },
        {
          name: 'editor',
          path: 'editor',
          component: () => import('@/views/editor')
        },
        {
          name: 'article',
          path: 'article/:slug', // 动态路由，
          component: () => import('@/views/article')
        },
        {
          name: 'set',
          path: 'set',
          component: () => import('@/views/set')
        }
      ]
    }
  ]
})

