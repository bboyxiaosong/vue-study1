import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//1.创建路由


import Home from '../components/Home.vue';

import News from '../components/News.vue';

import Content from '../components/Content.vue';

import Shop from '../components/Shop.vue';

import User from '../components/User.vue';


import Pub from '../components/Pub.vue';

import UserAdd from '../components/User/UserAdd.vue';

import UserList from '../components/User/UserList.vue';
//2配置路由

const routes = [

  {path:'/home',component:Home},

  {path:'/news',component:News,name:'news'},//命名试路由

  {path:'/content/:aid',component:Content},

  {path:'/shop',component:Shop},
  //下边涉及到路由嵌套

  {
    path:'/user',

    component:User,

    children:[

      {path:'useradd',component:UserAdd},

      {path:'userlist',component:UserList},
    ]



  },
  {path:'/pub',component:Pub},
  {path:'*',redirect:'/home'},//默认跳转 home
]
//3实例化路由

const router = new Router({
  mode:'history',//history 模式 会有点问题 ：就是配合后台改
  routes
})
export default router;
