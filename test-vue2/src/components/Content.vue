<template>
    <div id="content">
      {{msg}}
      <h1>{{list.title}}</h1>
      <div v-html="list.content"></div>

    </div>
</template>

<script>
    export default {
       data(){
         return {
           msg:'路由传值，数据',
           list:[]
         }
       },
      mounted(){
         console.log(this.$route.params);
         var aid = this.$route.params.aid;
        this.requestData(aid)
      },
      methods:{
        requestData(aid){
          var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;

          this.$http.get(api).then((res)=>{
            console.log(res);
            this.list = res.body.result[0];
          },(err)=>{
            console.log(err)
          })

        }
      }
    }
</script>

<style scoped>

</style>
