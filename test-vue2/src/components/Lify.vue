<template>
    <div >
      <p>生命周期</p>
      <button @click="setMassfe()">改变massage</button>
      <p>{{massge}}</p>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            massge:'shengmingzhouqi'
          }
        },
      methods :{
        setMassfe(){
          this.massge='改变之后';
        }
      },
      beforeCreate(){
        console.log('实例开始创建1')
      },
      created(){
        console.log('实例创建完成2')
      },
      beforeMount(){
        console.log('模板创建之前3')
      },
      mounted(){
        console.log('模板创建完成4')
      },
      beforeUpdate(){
        console.log('数据更新之前5')
      },
      updated(){
        console.log('数据更新完毕6')
      },
      beforeDestroy(){
        console.log('实例销毁之前7')
      },
      destroyed(){
        console.log('实例销毁完成8')
      }
    }
</script>

<style scoped>

</style>
