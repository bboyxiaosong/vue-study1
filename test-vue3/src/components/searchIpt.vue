<template>
    <div id="ipt">
      <div class="ipt-wrap">
        <input type="text" v-model="msg" placeholder="请输入需要搜索的内容">
      </div>
      <div class="list">
        <ul class="v-ul" v-if="flag">
          <li v-for="item,index in list"  @click="choiceCtrl(item.name)" v-if="index < 20">{{item.name}} - {{item.aliasName}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            msg:'',
            list:[],
            flag:false
          }
        },
        methods:{

          requestData(name){

            var self = this;
            let api = this.api.search+'?type=1&cityId=1&name='+name;
            this.axios.post(api).then(result=>{
              if(result.data.ret == 200){
                let res = result.data;
                console.log(res.data);
                if(res.data.length >0){
                  self.flag = true
                  self.list = res.data;
                }
              }
            },(err)=>{

              console.log(err);

            })
          },
          choiceCtrl(val){
            this.msg = val;
            this.flag = false;
          }

        },
        mounted(){

        },
        watch:{
          msg:function (val) {
            this.requestData(val);
            if(val==''){
              this.flag = false;
            }

          }

        }
    }
</script>

<style scoped lang="scss">
.ipt-wrap input{
  display: block;
  border: none;
  background: none;
  outline: none;
  -webkit-appearance: none;
  width: 80%;
  height: 30px;
  border: 1px solid #eee;
  margin: 0 auto;
  border-radius: 20px;
  text-indent: 2em;
  margin-top: 20px;
}
  .v-ul{
    width: 70%;
    margin: 10px auto;
    li{
      margin: 6px auto;
    }
  }
</style>
