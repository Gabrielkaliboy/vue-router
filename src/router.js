import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history', 默认值: "hash" (浏览器环境),这个会在地址栏添加一个#,history不会
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: () => import('./views/Shop.vue'),
      children: [
        {
          path: 'tel',
          name: 'tel',
          component: () => import('./views/Shop_tel.vue')
        },
        {
          path: 'address',
          name: 'address',
          component: function (resolve) {
            require(['./views/Shop_address.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      name: 'user',
      path: '/user',
      component: function (resolve) {
        require(['./views/User.vue'], resolve)
      }
    },
    {
      // 动态路由 $route.params
      name: 'userName',
      // 一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用
      path: '/user/:username',
      component: function (resolve) {
        require(['./views/UserName.vue'], resolve)
      }
    },
    {
      name: 'userNameAndPostID',
      // 你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中
      path: '/user/:username/post/:post_id',
      component: function (resolve) {
        require(['./views/UserNameAndPostID.vue'], resolve)
      }
    },
    {
      // 匹配所有路由路径
      path: '*',
      component: function (resolve) {
        require(['./views/404.vue'], resolve)
      }
    }
  ]
})
