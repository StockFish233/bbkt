import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)
Vue.use(ElementUI);

import Home from '../pages/Home.vue'
import Help from '../pages/Help.vue'
import Courseware from '../pages/Courseware.vue'
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
      component: Home
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/courseware',
      name: 'courseware',
      component: Courseware
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
