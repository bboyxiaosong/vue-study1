<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '这是首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
  margin: 0;
  padding:0; 

}
.hello{
  max-width: 1200px;
  margin: 0 auto;
  background: #eee;
  min-height: 500px;
}
</style>
