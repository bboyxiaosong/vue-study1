
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/home.vue';

import Mine from '../components/mine.vue';

import Pub from '../components/pub.vue';

import RoomFriend from '../components/roomFriend.vue';

import RoomInfor from '../components/roomInfor.vue';

import Search from '../components/search.vue';

import SearchIpt from '../components/searchIpt.vue';

const routes = [

  {path:'/home',component:Home},

  {path:'/mine',component:Mine},

  {path:'/pub',component:Pub},

  {path:'/roomFriend',component:RoomFriend},

  {path:'/roomInfor',component:RoomInfor},

  {path:'/search',component:Search},

  {path:'/searchIpt',component:SearchIpt},

  {path:'*',redirect:'/home'}

];


const  router = new Router({
  mode:'history',//history 模式 会有点问题 ：就是配合后台改
  routes
});

export default router;
