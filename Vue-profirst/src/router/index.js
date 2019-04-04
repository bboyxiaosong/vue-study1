import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/header/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/home',
      component:require('../header/home.vue')
    },
    {
      path:'/secondHouse',
      component:require('../header/secondHouse.vue')    
    },
    {
      path:'/rentHouse',
      component:require('../header/rentHouse.vue')
    },
    {
      path:'/houseStrategy',
      component:require('../header/houseStrategy.vue')
    },
    {
      path:'/mortgage',
      component:require('../header/mortgage.vue')
    }

  ]
})
