import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Help from '../pages/Help'
import Courseware from '../pages/Courseware'
import Download from '../pages/Download'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/courseware',
      name: 'Courseware',
      component: Courseware
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
  ]
})
