<template>
    <div class="news">
      <h2>新闻组件</h2>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10" class="list">
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </div>
</template>

<script>
  import VueEvent from '../model/vueEvent.js';
    export default {
      data(){
        return {
          list:[]  ,
          j:0,
          loading:false
        }
      },
      methods:{
        loadMore() {


          for(var i=0;i<40;i++,this.j++){

            this.list.push('第'+this.j+'条')
          }

          console.log('111');
        }
      },
      mounted(){
        VueEvent.$on('to-news',function (data) {
          console.log(data)
        })
      }

    }
</script>

<style scoped>

</style>
