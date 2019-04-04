<template>
  <div id="app">
    <div class="v-header">
      <ul class="v-header_ul">
        <li class="v-logo-location">
          <div class="vb-logo"></div>
          <div class="vb-location">北京</div>
        </li>
        <router-link to="/home">
        <li>首页</li>
        </router-link>

        <router-link to="/secondHouse">
        <li>二手房</li>
        </router-link>

        <router-link to="/rentHouse">
        <li>租房</li>
        </router-link>
         
        <router-link to="/houseStrategy">
         <li>房产攻略</li>
        </router-link>

        <router-link to="/mortgage">
         <li>房贷税费</li>
        </router-link>


       
        <li class="v-login-register">
          <div></div>
          <div class="v-login">登录</div>
          <div class="v-register">注册</div>
        </li>

      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {margin: 0;padding: 0;}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  width:100%;
}
.v-header {
  max-width: 1200px;
  margin: 0 auto;
}
.v-header_ul {
  background:rgba(0,0,0,0.4);
  display: -webkit-flex; /* Safari */
  display: flex;
}
.v-header_ul li {
  line-height: 64px;
  padding: 0 10px 0 10px;
  color: #fff;
}
/*位置style*/
.v-header .v-logo-location{
  display: -webkit-flex; /* Safari */
  display: flex;
  padding: 0 60px 0 84px;
}
/*logo*/
.v-header .vb-logo{
  width: 140px;
  height: 40px;
  background-image: url(./images/baihelogo.png);
  margin-top:12px; 
}
.v-header .vb-location{
  padding-left: 40px;
}

/*登录注册*/
.v-header .v-login-register{
  display: -webkit-flex; /* Safari */
  display: flex;
  padding-left: 190px;
}
</style>
