<template>
	<div calss="hello">
		<h1 v-html="massage"></h1>
		<!-- <h1 v-html="massage1"></h1> -->
		<button @click="onClikMe">click!</button>
		<h2>{{msgfromfather}}</h2>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				massage : "我注册的组件",
				massage1 :"儿子对父亲说的话"

			}
		},
		props:['msgfromfather'],
		methods : {
			onClikMe : function () {
				console.log(this.msgfromfather)
				// 下面是子组件向父组件传递数据 第一种
				this.$emit('child-tell-me-something',this.massage1);
				//

			}
		}

	}
</script>
<style>
	h1{
		color:red;
	}
</style>