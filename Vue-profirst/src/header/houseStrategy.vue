<template>
  <div class="strate">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '房产攻略'
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
.strate{
  max-width: 1200px;
  min-height: 500px;
  background: #ccc;
  margin: 0 auto;
}
</style>
