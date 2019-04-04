// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index.js'
import VueResource from 'vue-resource';
import './assets/css/basic.scss';

//基于Vue的框架 引入mint ui

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);


Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */




new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
