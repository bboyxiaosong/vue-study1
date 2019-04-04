<template>
  <div id="app">
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/user">用户中心</router-link>
      <router-link to="/pub">发布</router-link>
      <router-view></router-view>

  </div>
</template>

<script>


  export default {
    data () {
      return {
          msg:'asd',
          flag:true
      }
    },

  }
</script>

<style lang="scss">


</style>
