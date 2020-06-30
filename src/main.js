import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://localhost:4000/api';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
