import Vue from 'vue';
import Test from './test.vue';

const app = new Vue({
  el: '#app',
  render: h => h(Test),
});