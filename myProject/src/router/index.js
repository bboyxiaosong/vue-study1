import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/footer/home'

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
      component:require('../footer/home.vue')
    },
    {
      path:'/classi',
      component:require('../footer/classification.vue')
    },
    {
      path:'/find',
      component:require('../footer/find.vue')
    },
    {
      path:'/ShoppingCart',
      component:require('../footer/ShoppingCart.vue')
    },
    {
      path:'/MyDe',
      component:require('../footer/MyDe.vue')
    }
  ]
})
