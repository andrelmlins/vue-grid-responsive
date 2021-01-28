// import 'vue-code-highlight/themes/duotone-sea.css';

import { createApp } from 'vue';
// import { component as VueCodeHighlight } from 'vue-code-highlight';
import { Row, Column, Hidden } from '../src';
import App from './App.vue';

// Vue.component('code-highlight', VueCodeHighlight);

const app = createApp(App);

app.component('row', Row);
app.component('column', Column);
app.component('hidden', Hidden);
// app.component('code-highlight', VueCodeHighlight);

app.mount('#app');
