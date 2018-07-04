import Vue from 'vue'
import Router from 'vue-router'

const App = () =>
  import ("@/App.vue")
/* 首页模版 */
const Home = () =>
  import ("@/pages/Home.vue")
/* banner 管理 */
const BannerManage = () =>
  import ("@/pages/BannerManage")
const News = () =>
  import ("@/pages/News.vue")
const Permission = () =>
  import ("@/pages/Permission.vue")
const Login = () =>
  import ("@/pages/Login.vue")
Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'App',
    component: App,
    children: [{
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: '/',
            component: BannerManage
          },
          {
            path: '/banner',
            name: 'BannerManage',
            component: BannerManage
          },
          {
            path: '/news',
            name: 'News',
            component: News
          }, {
            path: '/permission',
            name: 'Permission',
            component: Permission
          },

        ]
      },
      {
        path: '*',
        redirect: '/banner'
      }
    ]
  }]
})
