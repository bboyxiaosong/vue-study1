<template>
  <div class="rentHouse">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '租房其他'
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
.rentHouse{
  max-width: 1200px;
  margin: 0 auto;
   min-height: 500px;
  background: #707252;
}
</style>
