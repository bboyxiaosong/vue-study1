<template>
  <div class="banner">
    <div class="swiper-container">
      <swiper :options="swiperOption">
        <swiper-slide :key=index v-for="(item,index) in image" :style="{backgroundImage: 'url(' + item.url + ')', backgroundSize:'cover'}">

        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="detail-container" v-if="flag">
      <div class="wrap1">
        <div class="border-line" :class="{'blue':obj.user.gender==1,'red':obj.user.gender==2,'defult':obj.user.gender!=2&obj.user.gender!=1}">
          <div class="avatar" :style="{backgroundImage: 'url(' + obj.user.avatar + ')', backgroundSize:'cover'}"></div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>

  export default {
        data(){
          return {
            msg:'',
            obj:{},
            flag:false,
            swiperOption:{
              autoplay:3000,
              loop: true,
              pagination: '.swiper-pagination',
              autoplayDisableOnInteraction:false

            }
          }
        },
        methods:{

        },
        mounted(){


        },

        props:['image','fatherData'],

        watch:{
          'fatherData':function (newData,oldData) {
            console.log(newData,oldData)

            if(newData){
              this.flag = newData;
              this.obj = this.$parent.list;

              console.log(this.obj);


            }

          }


        }



    }
</script>

<style scoped lang="scss">
  .swiper-container{

    .swiper-slide{
      width: 100%;
      height: 200px;
    }
  }
  .detail-container{
    .wrap1{
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
  }
</style>
