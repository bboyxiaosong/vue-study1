<template>
  <div id="list">

    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10" class="list">
      <li class="li" v-for="item in list">
        <router-link :to="'/roomInfor?id='+item.id">
          <div class="top">
            <div class="border-line" :class="{'blue':item.user.gender==1,'red':item.user.gender==2,'defult':item.user.gender!=2&item.user.gender!=1}">
              <div class="avatar" :style="{backgroundImage: 'url(' + item.user.avatar + ')', backgroundSize:'contain'}"></div>
            </div>
            <div class="create-time">{{ item.showOperateTime}}</div>
          </div>
          <div class="center">
            <div class="imageArr" :style="{'width':item.images.length*245+'px'}">

              <div  v-for="img in item.images" class="house-img" :style="{backgroundImage: 'url(' + img.url + ')', backgroundSize:'cover'}"></div>

            </div>

          </div>
          <div class="bottom">
          <div class="communtiy-name">
            <div class="p1">{{item.areaName}}-{{item.businessAreaName}}-{{item.communityName}}</div>
            <div class="p2" v-if="item.rent">￥{{item.rent}}/月</div>
            <div class="p2" v-if="!item.rent">租金面议</div>
          </div>
          <div class="houseInfor">
            <div class="p1">
              {{item.rentType==3?'整租':'合租'}} · {{item.room}}室{{item.parlor}}厅{{item.toiletCount==undefined?0:item.toiletCount}}卫{{item.rentType==1?'-主卧':item.rentType==2?'-次卧':''}}
              {{item.payment==1?'押一付一':item.payment==2?'押一付三':item.payment==3?'押一付六':item.payment==4?'年付':item.payment==5?'面议':item.payment==''?'面议':item.payment==undefined?'面议':'不限'}}
            </div>
          </div>
          <div class="admin-r">
            <span v-if="!item.user.mobileNumber">手机认证</span>
            <span v-if="item.user.authenticationStatus==1">身份认证</span>
            <span>押金保障</span>
          </div>

        </div>
        </router-link>
      </li>
      <div v-if="!noMore" class="no-more">没有更多了</div>
      <div class="loading1" v-if="!loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </ul>



  </div>
</template>

<script>

    export default {
      data(){
        return{

          list:[],
          page:1,
          loading:false,
          noMore:true

        }
      },
      methods:{
        loadMore() {
          this.requestData();

        },
        requestData(){

          this.loading = true;

          let api ='/api/chuzu?type=1&cityId=1&page='+this.page;

          this.axios.post(api).then(result=>{

            let res = result.data;

            console.log(res.data.houses);

            this.list = this.list.concat(res.data.houses);

            ++this.page;  /*每次请求完成page++*/

            //判断最后一页是否有数据
            if(res.data.houses.length<20){

              this.loading=true;

              this.noMore=false;

            }else{

                this.loading=false;

            }
          },(err)=>{
            console.log(err);
          })
        }

      },
      mounted(){
        //this.requestData();
      }
    }
</script>

<style scoped lang="scss">
  #list{
    width: 100%;
    margin-top: 100px;
    overflow: hidden;
    margin-bottom: 4.4rem;
    background-color: #F7F7F7;
    user-select: none;
    -webkit-user-select: none;
    a{
      text-decoration: none;
    }
    .li{
      min-height: 200px;
      padding: 10px 20px;
      background-color: #fff;
      margin-bottom: 12px;
      .top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        .border-line{
          width: 40px;
          height: 40px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          .avatar{
            width: 36px;
            height: 36px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            border: 2px solid #fff;
          }
        }

        .create-time{
          line-height: 44px;
          font-size: 12px;
          color: #999;
        }
        .blue{
          border: 2px solid #4570aa;
        }
        .red{
          border: 2px solid #f44336;
        }
        .defult{
          border: 2px solid #7b7070;
        }
      }
      .center{
        width: 100%;
        overflow-x: auto;
        .imageArr{
          display: flex;
          .house-img{
            width: 240px;
            height: 180px;
            margin:0 8px 0 0;
            border-radius: 10px;
          }
        }

      }
      .bottom{
        padding-top:10px;
        .communtiy-name{
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #4a4a4a;
          line-height: 20px;
          .p2{
            color: #e85247;
            font-size: 14px;
          }
        }
        .houseInfor{
          .p1{color: #4a4a4a}
        }
        .admin-r{
          display: flex;
          padding-top: 6px;
          span{
            display: block;
            margin-right: 4px;
            padding: 0 6px 0 6px;
            border: 1px solid rgb(125,177,180);
            line-height: 18px;
            color: rgb(125,177,180);
            border-radius: 6px;
          }
        }
      }
    }
    .loading1{
      width: 80px;
      height: 40px;
      margin: 20px auto 0 auto;
      span{
        display: inline-block;
        width: 4px;
        height: 100%;
        border-radius: 4px;
        background: lightgreen;
        -webkit-animation: load 0.35s ease infinite;
      }
      @-webkit-keyframes load{
        0%,100%{
          height: 20px;
          background: lightgreen;
        }
        50%{
          height: 40px;
          margin: -15px 0;
          background: lightblue;
        }
      }
      span:nth-child(2){
        -webkit-animation-delay:0.2s;
      }
      span:nth-child(3){
        -webkit-animation-delay:0.4s;
      }
      span:nth-child(4){
        -webkit-animation-delay:0.6s;
      }
      span:nth-child(5){
        -webkit-animation-delay:0.8s;
      }
    }
    .no-more{
      line-height: 30px;
      text-align: center;
      font-size: 18px;
      color: coral;
    }
  }
</style>
