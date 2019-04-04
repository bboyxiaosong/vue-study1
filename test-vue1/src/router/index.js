import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'

//改的 1start 
// import pub from '@/components/pub';
// import guarantee from '@/components/guarantee';
// import mine from '@/components/mine';
//  1end

Vue.use(Router)


// 改的2 start
// const routes = [
// {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//   {path:'/home',component:Home},
//   {path:'/pub',component:pub},
//   {path:'/guarantee',component:guarantee},
//   {path:'/mine',component:mine}
// ]


// const router = new Router({
//   routes
// })

// export default router;
// 改的2 end


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/home',
      component:require('../components/home.vue').default
    },
    {
      path:'/pub',
      component:require('../components/pub.vue').default
    },
    {
      path:'/guarantee',
      component:require('../components/guarantee.vue').default
    },
    {
      path:'/mine',
      component:require('../components/mine.vue').default
    }

  ]
})
