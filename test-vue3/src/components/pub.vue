<template>
    <!-- 所有的内容要被根节点包含起来 -->
    <div id="pub">
      {{msg}}
    </div>

</template>


<script>

/*

  生命周期函数/生命周期钩子：

    组件挂载、以及组件更新、组件销毁、的时候触发的一系列的方法  这些方法就叫做生命周期函数
*/
    export default{

        data(){

            return{

                msg:'发布页面'
            }
        },
        methods:{
            setMsg(){

            }

        },



    }
</script>
