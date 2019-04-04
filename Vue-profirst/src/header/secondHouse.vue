<template>
  <div class="secondHouse">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '二手房'
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
.secondHouse{
  max-width: 1200px;
  margin: 0 auto;
  min-height: 500px;
  background: #702512;
}
</style>
