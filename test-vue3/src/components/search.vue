<template>
  <div id="search">

    <div class="header">
      <div class="lf-wrap">
          <div class="location"></div>
          <div>北京</div>
      </div>
      <router-link :to="'/searchIpt'">
        <div class="rt-wrap">
          <div class="main-wrap">
            <div class="ipt-img"></div>
          </div>
        </div>
      </router-link>
    </div>

    <div class="filter">
      <div class="item-menu first-menu">筛选：</div>

      <div class="item-menu">
        <div class="">区域</div>
        <div class="hot"></div>
      </div>
      <div class="item-menu">
        <div class="">更多</div>
        <div class="hot"></div>
      </div>
      <div class="item-menu">
        <div>租金</div>
        <div class="hot"></div>
      </div>
      <div class="item-menu">
        <div>排序</div>
        <div class="hot"></div>
      </div>


    </div>

  </div>
</template>

<script>
    export default {
        data(){
          return {
            search:'',
          }
        },
        methods:{

        },
        mounted(){

        }

    }
</script>

<style scoped lang="scss">
#search{
  width: 100%;
  height: 90px;
  background-color:#fff ;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  a{
    text-decoration: none;
    color:#333;
  }
  .header{
    padding: 10px 20px;
    display: flex;
    margin-top: 4px;
    justify-content: space-between;
    .lf-wrap{
      display: flex;
      flex: 1;
      line-height: 30px;
      .location{
        width: 25px;
        height: 32px;
        background: url("../assets/img/list-location.png") center no-repeat;
        background-size: 14px 18px;
        margin-right: 4px;
      }
    }
    .rt-wrap{

      .main-wrap{
        width: 240px;
        height: 30px;
        border-radius: 20px;
        border:1px solid #eee;
        overflow: hidden;
        .ipt-img{
          width: 33.7px;
          height: 35.7px;
          margin: 6px 20px 0 12px;
          background: url("../assets/img/icon-owning-search.png") no-repeat;
          background-size: 20px 21px;
        }
      }

    }
  }
  .filter{
    padding: 4px 20px;
    display: flex;
    justify-content: space-between;
    .item-menu{
        display: flex;
        font-size: 12px;
        color: #4a4a4a;
      .hot{
        width: 20px;
        height: 20px;
        margin-top: 7px;
        margin-left: 2px;
        background: url("../assets/img/icon-sildeDown.png") no-repeat;
        background-size: 10px 6px;

      }
    }
    .first-menu{
      font-weight: bold;
    }
  }
}
</style>
