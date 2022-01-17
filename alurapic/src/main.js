import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resourse';

Vue.use(VueResourse);

new Vue({
  el: '#app',
  render: h => h(App)
})
