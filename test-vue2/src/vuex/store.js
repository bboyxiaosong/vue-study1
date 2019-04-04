import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*1.state 在vuex 用于存储数据*/
var state = {
  count:1,
  list:[]
}

/*2.mutations主要用于改变 state的数据*/

var mutations = {
  incCount(){
    ++state.count;
  },
  addList(state,data){
    state.list = data;
  }
}
/*3 getter 方法有点像计算属性 改变 state 里面的count 数据 会触发getters 方法获取新的值*/

var getters = {
  computedCount:(state)=>{
    return state.count*2
  }
}

/*Action 基本没有用

		Action 类似于 mutation，不同在于：

		Action 提交的是 mutation，而不是直接变更状态。
		Action 可以包含任意异步操作。*/
var actions= {
  incMutationsCount(context) {    /*因此你可以调用 context.commit 提交一个 mutation*/


    context.commit('incCount');    /*执行 mutations 里面的incCount方法 改变state里面的数据*/


  }
}

/*最后.0  实例化vuex.store*/
const store = new Vuex.Store({
  state ,
  getters,
  mutations,
  actions

});

// 最后导出
export default store;
