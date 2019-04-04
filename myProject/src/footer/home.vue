<template>
  <div class="hello">
      <!--@轮播图-->

      <div class="V-setImg">
          <swiper :options="swiperOption">
             <swiper-slide :key=index v-for="(item,index) in banners" v-if="index<5">
                <img :src="item.images.large">
             </swiper-slide>
             <div class="swiper-pagination" slot="pagination"></div>
           </swiper>
      </div>

      <!-- Jd**Nav** -->
      <div class="V-navBar">
          <ul id="op">
            <li v-on:click="tableTap">
              <img src="../images/jd-sh.png" alt="">
                <span>京东超市</span>
            </li>
            <li>
              <img src="../images/jd-go.png" alt="">
                <span>全球购</span>
            </li>
            <li>
              <img src="../images/jd-fu.png" alt="">
              <span>服装城</span>
            </li>
            <li>
              <img src="../images/jd-she.png" alt="">
              <span>京东生鲜</span>
            </li>
            <li>
              <img src="../images/jd-shi.png" alt="">
                <span>京东到家</span>
            </li>
        </ul>
        <ul>
            <li>
              <img src="../images/jd-cho.png" alt="">
                <span>充值中心</span>
            </li>
            <li>
              <img src="../images/jd-hui.png" alt="">
                  <span>惠赚钱</span>
            </li>
            <li>
              <img src="../images/jd-jiu.png" alt="">
                <span>领券</span>
            </li>
            <li>
              <img src="../images/jd-liu.png" alt="">
                <span>物流查询</span>
              </li>
            <li>
              <img src="../images/jd-guan.png" alt="">
                  <span>我的关注</span>
            </li>
          </ul>
      </div>
    <div class="v-jd-newsCont">
      <div class="v-jd-news">
            <div class="v-jd-newsList">
                <img src="../images/jd-news-tit.png" alt="">
            </div>
            <div class="v-jd-newsSwiper">
              <swiper :options="swiperOptionster" class="cla">
                 <swiper-slide :key=index v-for="(item,index) in news">
                  <span class="v-jd-red">热</span>  {{item}}
                 </swiper-slide>
               </swiper>
            </div>
            <div class="v-jd-newslink">
                <span class="v-jd-newsGong"></span>更多
            </div>

      </div>
    </div>




  </div>
</template>
<script>

export default {
  name: 'hello',
  data () {
    return {
      banners:[],
      news:['佳能旗舰新机，12期白条免息',
            '买Macbook送Beats耳机！',
            '值了！这张3期的鞋包免息券！'
           ],
      swiperOption: {
         autoplay:3000,
         loop: true,
         pagination: '.swiper-pagination',
         autoplayDisableOnInteraction:false

       },
       swiperOptionster: {
          autoplay:3000,
          direction: 'vertical',
          loop:true

        }
    }
  },
  created () {
    this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters').then((res) => {
        console.log(res.data)
        const that = this
        that.banners = res.data.subjects
      })
    },
  methods:{
      tableTap () {
          console.log(3)
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
  padding: 0;
  margin:0;
}
h1, h2 {
  font-weight: normal;
}



.V-setImg{
  height:170px;
  width:100%;
  /*overflow: hidden;*/
}
.V-setImg img{
  width:100%;
  height: 170px;
  display: block;
}
.V-navBar{
min-height:127px;
width: 100%;
background-color: #eee;
}
.V-navBar ul{

  display: flex;
  width: 100%;
  padding: 10px 0;
  flex-flow: row wrap;

}
.V-navBar ul li{
  list-style:none;
  width: 20%;
  text-align: center;
}

.V-navBar ul li img{
    width: 45px;
    height: 45px;
    padding:0 15px;
    display: block;
    margin: auto;
}
.V-navBar ul li span{
  font-size: 12px;
  color: #000;
}
.v-jd-news{
  height: 30px;
  padding: 0 5px;
  margin: 0 8px 8px;
  font-size: 12px;
  border-radius: 6px;
  background: #fff;
  display: flex;
}
.v-jd-newsCont{
  background: #eee;
  height: 37px;
  line-height: 37px;
  font-size: 12px;
}
.v-jd-newsList{
    width: 73px;
    height: 16px;
}
.v-jd-newsList img{
  width: 73px;
  height: 16px;

}
.v-jd-newsSwiper{
  height:30px;
  width:83%;
  line-height: 30px;
  padding-left:15px;
}
.v-jd-newslink{
  width:50px;
  text-align: center;
  line-height: 30px;
}
.v-jd-newsGong{
    background: #ececec;
    width: 1px;
    height: 16px;
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle;
}
.cla{
  height: 30px !important;
}
.v-jd-red{
  font-size: 12px;
  color: #f23030;
}
</style>
