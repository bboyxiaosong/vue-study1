<template lang="html">
    <div class="v-find">
    	<h1 v-text='title'></h1>
    	<div v-text="massage"></div>
		<div v-html='todoSth'></div>
		<input type="text" v-model="newItem" v-on:keyup.enter="addNew">
		<ul>
			<li v-for="item in items" v-text="item.label" v-bind:class="{finished :item.isFinished}" v-on:click="toggleFinish(item)">

			</li>
		</ul>
		<p>child tells me:{{childWords}}</p>
		<component-a msgfromfather='you live' v-on:child-tell-me-something='listenToMyBoy'></component-a>
    </div>

</template>

<script>
import Store from '../store'
import componentA from './componentA'
console.log(Store)
export default {
    data () {
        return{
	        massage:'我是发现页',
	        todoSth : '<span>我要做一个 lista</span>',
	        title : 'this is todoList',
	        items : [
	        	{
	        		label:'coding',
	        		isFinished : true
	        	},
	        	{
	        		label:'walking',
	        		isFinished : false
	        	}
	        ],
	        items :Store.fetch(),
	        liClass:"thisisClass",
	        newItem:'',
	        childWords:''


        }

    },
    components :{
    	componentA
    },
    watch : {
    	items : {
    		handler :function (items) {
    			//console.log(val,oldVal)	;
    			Store.save(items)
    		},
    		deep :true
    	}
    },
    events : {
    	'child-tell-me-something' : function (msg){
    		console.log(this.childWords =msg)
    	}
    },
     methods : {
    	toggleFinish : function (item){
    			item.isFinished = !item.isFinished
    	},
    	addNew : function (){
    		console.log(this.newItem);
    		this.items.push({
    			label:this.newItem,
    			isFinished:true
    		})
    		this.newItem = '';

    	}
    	,
    	listenToMyBoy : function (msg){
    		console.log(this.childWords =msg)
    	}
    }

}
</script>

<style lang="css">
.finished{
	text-decoration: underline;
}
</style>
