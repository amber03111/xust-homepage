import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/PcPage'

import About from '../components/MobilePage'
import  Sign from '../components/pc/SignPage'
import  Sign2 from '../components/mobile/SignPage'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/pc', name: 'pc', component: HelloWorld},
    { path: '/mobile',  name: 'mobile', component: About},
    { path: '/signpc',  name: 'signpc', component: Sign},
    { path: '/signmobile',  name: 'signmobile', component: Sign2},
  ]
})
