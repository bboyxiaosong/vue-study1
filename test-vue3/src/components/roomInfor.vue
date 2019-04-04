<template>
  <div id="detail">

    <div class="banner">
      <v-banner :image="image" :flag="flag" :fatherData="flag"></v-banner>
    </div>
  </div>
</template>

<script>
    import Banner from './banner.vue';
    import Api from '../javascript/api.js';
    export default {
       data(){
         return {
           msg:'',
           image:[],
           list:[],
           user:[],
           flag:false
         }
       },
      components:{
         'v-banner':Banner
      },
       methods:{
         requestData(id){

           var self = this;
           let api = Api.chuzuDetail+'?id='+id;

           this.axios.post(api).then(result=>{

             let res = result.data;

             self.image = res.data.image;

             self.list = res.data;

             self.flag = true;

             //console.log(self.flag)



             console.log(this.list)

           },(err)=>{
             console.log(err);
           })
         }
       }
        ,
       mounted(){
          console.log(this.$route.query);
          var id = this.$route.query.id;
          this.requestData(id)
       }
    }
</script>

<style scoped>

</style>
