import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import style from './style/index.scss';
Vue.config.productionTip = false;

Vue.prototype.$style = style;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
