<template>
  <div class="home">
    <div>{{msg}}</div>
    <button @click="goNews()">跳转新闻</button>
    <v-header ref="header" :title="title" :homeMsg="msg" :run="run" :home="this"></v-header>
    <div>
      <ul>
        <!--路由传值-->
        <li v-for="item,index in list" v-if="index/2==0">
          <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
        </li>
        <!--get 传值-->
        <li v-for="item,index in list" v-if="index/2!=0">
          <router-link :to="'/shop?aid='+item.aid">{{item.title}}</router-link>
        </li>
      </ul>
      <!--mintUI的使用：-->
      <!--<mt-button type="default">default</mt-button>-->
      <!--<mt-button type="primary">primary</mt-button>-->

      <!--<mt-index-list>-->
        <!--<mt-index-section index="A">-->
          <!--<mt-cell title="Aaron"></mt-cell>-->
          <!--<mt-cell title="Alden"></mt-cell>-->
          <!--<mt-cell title="Austin"></mt-cell>-->
        <!--</mt-index-section>-->
        <!--<mt-index-section index="B">-->
          <!--<mt-cell title="Baldwin"></mt-cell>-->
          <!--<mt-cell title="Braden"></mt-cell>-->
        <!--</mt-index-section>-->
        <!--...-->
        <!--<mt-index-section index="Z">-->
          <!--<mt-cell title="Zack"></mt-cell>-->
          <!--<mt-cell title="Zane"></mt-cell>-->
        <!--</mt-index-section>-->
      <!--</mt-index-list>-->

    </div>
    <!--vuex 数据共享-->
    <div>{{this.$store.state.count}} ------ {{this.$store.getters.computedCount}}</div>
    <button @click="incCount">增加数</button>
  </div>


</template>

<script>

  import Header from './Header.vue';
  import Axios from 'axios';
  import VueEvent from '../model/vueEvent.js';
  import store from '../vuex/store.js'
  export default {
    data () {
      return {
        msg:'asd',
        list:[],
        title:'shouye'
      }
    },
    store,
    components: {
      'v-header': Header
    },
    methods:{

      incCount(){
        //this.$store.commit('incCount');

        this.$store.dispatch('incMutationsCount');
      },
       getData(){
         var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      //   this.$http.get(api).then(function (res) {
      //     console.log(res);
      //     this.list = res.body.result;
      //   },function (err) {
      //       console.log(err)
      //   })
         Axios.get(api).then((res)=>{
            console.log(res);
           this.list = res.data.result;

           this.$store.commit('addList',res.data.result); //vuex数据持久化
         }).catch((err)=>{
           console.log(err)
         });


      },

      run(data){
         console.log('等待传值====='+data)
      },
      getChild(){
         console.log( this.$refs.header.massage)
        this.$refs.header.runChid();
      }
      ,
      //兄弟组件传值
      sibCtrl(){
        VueEvent.$emit('to-news',this.msg)
      },

      goNews(){
         //编程试导航
         //this.$router.push({path:'news'})
        //this.$router.push({path:'content/499'});

        //另一种跳转方式

        //{path:'/news',component:News,name:'news'}

        //router.push({name:'news',params:{userId:123}});

         this.$router.push({name:'news'});//1命名是试路由



      }






    },
    mounted(){

      var listData = this.$store.state.list;

      if(listData.length>0){
        this.list = listData;
      }else{
        this.getData();
      }

    }
  }
</script>

<style scoped >


</style>
