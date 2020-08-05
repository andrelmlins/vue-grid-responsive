import 'vue-code-highlight/themes/duotone-sea.css';

import Vue from 'vue';
import { component as VueCodeHighlight } from 'vue-code-highlight';
import { Row, Column, Hidden } from '../src';
import App from './App.vue';

Vue.component('row', Row);
Vue.component('column', Column);
Vue.component('hidden', Hidden);
Vue.component('code-highlight', VueCodeHighlight);

new Vue({
  el: '#app',
  render: h => h(App)
});
