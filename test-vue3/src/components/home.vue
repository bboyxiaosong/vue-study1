<template>
    <!-- 所有的内容要被根节点包含起来 -->
    <div id="home">
        <v-search class="search"></v-search>
        <v-list class="list"></v-list>
    </div>

</template>


<script>
    import HomeList from './HomeList.vue';
    import Search from './search';
    export default{

        data(){

            return {
                msg:'首页',
                flag:true
            }
        },
        components: {
          'v-list': HomeList,
          'v-search':Search
        },
        methods:{

        }


    }

</script>

<style scoped lang="scss">

    /*css  局部作用域  scoped*/


</style>
