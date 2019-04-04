<template>
    <div id="Shop">
      {{msg}}
      <h1>{{list.title}}</h1>
      <div v-html="list.content"></div>
    </div>
</template>

<script>
    export default {
       data(){
         return{
           msg:'get穿值,详情页',
           list:[]
         }
       },
      mounted(){
         console.log(this.$route.query);
         var aid = this.$route.query.aid;
        this.requestData(aid)
      },
      methods:{
        requestData(aid){
          var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;

          this.$http.get(api).then((res)=>{
              console.log(res)
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
