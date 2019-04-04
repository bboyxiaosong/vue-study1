<template>
  <div id="action">
    <a-action>

    </a-action>
  </div>
</template>

<script>
    import ActionSheet from './mint/ActionSheet.vue';
    export default {
        data(){
          return {
            msg:''
          }
        },
        components:{
            'a-action':ActionSheet
        }
    }
</script>

<style scoped>

</style>
