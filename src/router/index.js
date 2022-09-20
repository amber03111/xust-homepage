import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/PcPage'



 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HelloWorld'
    },
  
    { path: '/HelloWorld', 
   
    name: 'HelloWorld',
     component: HelloWorld },
     

  ]
})
