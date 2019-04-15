import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)
Vue.use(ElementUI);

import Home from '../pages/Home.vue'
import Help from '../pages/Help.vue'
import Download from '../pages/Download.vue'
import Login from '../pages/Login.vue'

export default new Router({
  mode:'history',
  routes: [
    {
      path: '*',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/help',
      name: 'help',
      component: Help,
      meta:{
        title:'帮助'
      }
    },
    {
      path: '/download',
      name: 'download',
      component: Download,
      meta:{
        title:'下载'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        title:'登录'
      }
    },
  ]
})
