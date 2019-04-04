<template>
  <div class="page-actionsheet">
    <h1 class="page-title">Action Sheet</h1>
    <div class="page-actionsheet-wrapper">
      <mt-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</mt-button>
      <mt-button @click.native="sheetVisible2 = true" size="large">不带取消按钮的 action sheet</mt-button>

      <mt-button @click.native="flag = true" size="large">模仿demo写入方法</mt-button>

    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>



    <mt-actionsheet :actions="actions0" v-model="flag" cancel-text=""></mt-actionsheet>
  </div>
</template>

<style>
  /*@component-namespace page {*/
    /*@component actionsheet {*/
      /*@descendent wrapper {*/
        /*padding: 0 20px;*/
        /*position: absolute 50% * * *;*/
        /*width: 100%;*/
        /*transform: translateY(-50%);*/

        /*button:first-child {*/
          /*margin-bottom: 20px;*/
        /*}*/
      /*}*/
    /*}*/
  /*}*/
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2: [],
        actions0:[],
        flag:false
      };
    },

    methods: {
      takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      },

      goBack() {
        history.go(-1);
      },
      openCtrl(){
        console.log('打开')
      },
      closeCtrl(){
        console.log('关闭')
      }
    },

    mounted() {
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
      this.actions0=[{
        name:'自定义方法',
        method:this.openCtrl
      },
        {name:'关闭'}
        ]
    }
  };
</script>
