<template>
  <div >
    {{massage}}
    {{title}}
    {{homeMsg}}
    <!--父组件给子组件传值-->
    <button @click="run('1213')">执行父组件的方法</button>
    <!--第二种子组件主动获取父组件的方法-->

    <button @click="getParent()">执行父组件的方法第二种</button>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          massage: '头部组价'
        }
      },
      methods:{
          runChid(){

            console.log('子组件的方法');
          },
        getParent(){
            this.$parent.run();
        }
      },
      props:['title','homeMsg','run','home']
    }
</script>

<style scoped>

</style>
