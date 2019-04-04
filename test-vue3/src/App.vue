<template>


  <div id="app">
    <div class="footer">
      <router-link to="/home">home</router-link>

      <router-link to="/roomFriend">roomFriend</router-link>

      <router-link to="/pub">pub</router-link>

      <router-link to="/mine">mine</router-link>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>

  /*

  生命周期函数/生命周期钩子：
    组件挂载、以及组件更新、组件销毁、的时候触发的一系列的方法  这些方法就叫做生命周期函数
  */
  import housePub from './pub/housePub';

  export default {

    data () {
      return {

      }
    },
    components:{
      'v-house':housePub
    },

    methods:{

    },

    mounted(){

    }
  }
</script>


<style scoped lang="scss">

  .footer{
    width: 100%;
    height:4.4rem;
    position: fixed;
    bottom:0;
    left: 0;


    background:rgba(0,0,0,0.86);

    line-height:4.4rem;

    text-align:center;

    font-size: 14px;

    color: #ff5f5f;


  a{
    color:#fff;

    padding:0 1.2rem;

    text-decoration: none;

    }
  }


</style>
