import Vue from 'vue';
import { Row, Column } from '../src';
import App from './App.vue';

Vue.component('row', Row);
Vue.component('column', Column);

new Vue({
  el: '#app',
  render: h => h(App)
});
