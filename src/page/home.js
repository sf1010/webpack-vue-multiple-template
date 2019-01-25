import Vue from 'vue';
import Home from './home.vue';

const app = new Vue({
  el: '#app',
  render: h => h(Home),
});