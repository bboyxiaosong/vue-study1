// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';

import router from './router/router';

import  VueResource  from 'vue-resource';

import axios from 'axios';

import MintUI from 'mint-ui';

import VueAwesomeSwiper from 'vue-awesome-swiper';

import Api from './javascript/api.js';

import 'mint-ui/lib/style.css';
Vue.use(MintUI);
Vue.use(VueAwesomeSwiper);
import './dist/css/swiper.min.css';
import './assets/css/basic.scss';

Vue.use(VueResource);
Vue.prototype.axios = axios;
Vue.prototype.api = Api;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
