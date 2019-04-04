<template>
  <div id="app">
    <!-- @au:Footer 导航 -->
      <div class="footer">
          <ul>
            <router-link to="/home">
              <li>
                  <img src="./images/a-home.png" alt="">
              </li>
            </router-link>
            <router-link to="/classi">
              <li>
                  <img src="./images/n-catergry.png" alt="">
              </li>
            </router-link>
            <router-link to="/find">
              <li>
                  <img src="./images/n-find.png" alt="">
              </li>
            </router-link>
            <router-link to="/ShoppingCart">
              <li>
                  <img src="./images/n-cart.png" alt="">
              </li>
            </router-link>
            <router-link to="/MyDe">
              <li>
                    <img src="./images/n-me.png" alt="">
              </li>
            </router-link>

          </ul>
      </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Store from './store'
export default {
    name: 'app'
    // return{
    //   title :'this is a todo list',
    //   items : [
    //     {
    //       label : 'coding',
    //       isFinished : true
    //     },
    //     {
    //       label : 'walking',
    //       isFinished : true
    //     }
    //   ],
    //   toggleFinish : function (item) {
    //     console.log(item)
    //   }
    //
    //
    // }
}
</script>

<style>
body{
  padding: 0;
  margin:0;
}

.footer{
  height:58px;
  width:100%;
  background-color:#fff;
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 10px 0 rgba(155,143,143,0.6);
}
.footer ul{
  display: flex;
  list-style-type: none;
  padding: 0;
  margin:0;
}
.footer ul router-link li{
  width: 20%;
  text-align: center;
  height:100%;
  line-height:58px;
}
 .footer ul li img{
  width: 100%;
  display: block;

}


</style>
