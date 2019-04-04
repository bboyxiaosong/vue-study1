<template>
  <div class="mortgage">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '房租税费'
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
.mortgage{
  max-width: 1200px;
  margin: 0 auto;
  min-height: 500px;
  background: #898989;
}
</style>
